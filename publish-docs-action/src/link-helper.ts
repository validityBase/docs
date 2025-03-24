import * as fs from 'fs';

export async function replaceAbsoluteGitLinksInFile(filePath: string, reposToResolveStr: string): Promise<void> {

    if(reposToResolveStr){
        console.log(`Resolving absolute links pointing to \n ${reposToResolveStr}...`);
    }
    else{
        console.log('No repos to resolve provided. Skipping...');
        console.log('Please provide a list of repos to resolve in the action parameter resolve-absolute-links-repos');
        return;
    }
    
    console.log(`Resolving absolute links in ${filePath}...`);

    let content = fs.readFileSync(filePath, 'utf8');
    const linkRegex = /(?:https\:\/\/github\.com\/)([\w\-_]+)\/([\w\-_]+).*\/([\w\-_]+\.md)/gm;
    content = content.replace(linkRegex, (match, owner, repo, file) => {
        console.log(`Absolute link detected: ${match}`);
        console.log(`Owner: ${owner}, Repo: ${repo}, File: ${file}`);

        if(owner !== 'validityBase'){
            console.log(`Owner is not validityBase, skipping...`);
            return match;
        }

        if(!reposToResolveStr.includes(repo)){
            console.log(`Repo ${repo} is not in the list of repos to resolve, skipping...`);
            return match;
        }

        const newLink = `../${repo}/${file}`;
        console.log(`Link replaced with ${newLink}`);
        return newLink;
    });

    fs.writeFileSync(filePath, content);

}
