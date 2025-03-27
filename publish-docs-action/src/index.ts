import path from 'path';
import * as core from '@actions/core';
import { replaceAbsoluteGitLinksInFile } from './link-helper';
import { cloneDocsRepository, commitAndPushDocsRepository } from './git-helpers';
import { copyDocs, preprocessMdsInDirectory } from './md-helpers';
import { Constants } from './constants';
import { replacePlantUmlDiagramsInFile } from './plant-uml-helpers';

console.log('Publishing user documentation to the central docs repository...');

cloneDocsRepository()
    .then(() => {
        return copyDocs();
    })
    // replace PlantUml diagrams with images
    .then((prodDocsDirectoryInTheMainDocs) => {
        if(core.getInput('preprocess-plant-uml') === 'true') {
            return preprocessMdsInDirectory(
                path.join(Constants.MainDocsDirectory, prodDocsDirectoryInTheMainDocs),
                    replacePlantUmlDiagramsInFile)
                .then(() => prodDocsDirectoryInTheMainDocs);
        }
        else {
            return prodDocsDirectoryInTheMainDocs;
        }
    })
    // replace absolute links to the GitHub repositories with relative links
    // the relatives links are only valid within the central docs repository
    .then((prodDocsDirectoryInTheMainDocs) => {
        if(core.getInput('resolve-absolute-links-repos')) {
            return preprocessMdsInDirectory(
                path.join(Constants.MainDocsDirectory, prodDocsDirectoryInTheMainDocs),
                    async (mdFile: string) => await replaceAbsoluteGitLinksInFile(mdFile, core.getInput('resolve-absolute-links-repos')))
                .then(() => prodDocsDirectoryInTheMainDocs);
        }
        else {
            return prodDocsDirectoryInTheMainDocs;
        }
    })
    .then((prodDocsDirectoryInTheMainDocs) => {
        return commitAndPushDocsRepository(prodDocsDirectoryInTheMainDocs);
    })
    .then(() => {
        console.log('Publishing user documentation is done.');
    });
