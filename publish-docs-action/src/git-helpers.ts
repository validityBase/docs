import * as core from '@actions/core';
import { run } from './process-helpers';
import { Constants } from './constants';

const docsRepoAccessToken = core.getInput('docs-repo-access-token');
const docsRepository = core.getInput('target-repository');
const env = process.env as any;

let targetBranch = core.getInput('target-repository-branch') as string;
            if(!targetBranch) {
                console.log('No target-repository-branch provided. We will use the current product branch name.');
                targetBranch = env.GITHUB_REF_NAME;
            }

export async function cloneDocsRepository(): Promise<void> {
    console.log(`Cloning the docs repository: "${docsRepository}"...`);
    await run("git", ["clone", "-b", getTargetBranch(), `https://${docsRepoAccessToken}@github.com/${docsRepository}.git`, Constants.MainDocsDirectory], null);
    console.log('Cloning the docs repository done.');
}

export async function commitAndPushDocsRepository(productDocsSubDirectory: string): Promise<void> {
    console.log('Committing and pushing the changes to the docs repository...');
    
    await run("git", ["config", "user.name", "github-actions[bot]"], Constants.MainDocsDirectory);
    await run("git", ["config", "user.email", "github-actions[bot]@users.noreply.github.com"], Constants.MainDocsDirectory);
    await run("git", ["add", productDocsSubDirectory], Constants.MainDocsDirectory);
    await run("git", ["diff-index", "--quiet", "HEAD"], Constants.MainDocsDirectory)
        .then(() => {
            // no changes
            console.log('No changes in the docs repository.');
        })
        .catch(async () => {
            // there are changes
            console.log('Committing the changes to the docs repository...');

            var currentRepo = env.GITHUB_REPOSITORY.split('/')[1];
            await run("git", ["commit", "-m", `Update ${currentRepo} documentation from automated build`], Constants.MainDocsDirectory);
            await run("git", ["push", `https://${docsRepoAccessToken}@github.com/${docsRepository}.git`, getTargetBranch()], Constants.MainDocsDirectory);

            console.log('Committing the changes to the docs repository done.');
        });
}

function getTargetBranch(): string {
    let targetBranch = core.getInput('target-repository-branch') as string;
    if(!targetBranch) {
        targetBranch = env.GITHUB_REF_NAME;
        console.log(`No target-repository-branch provided. We will use the current product branch name - ${targetBranch}.`);
    }
    return targetBranch;
}