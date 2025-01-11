import path from 'path';
import * as core from '@actions/core';
import { cloneDocsRepository, commitAndPushDocsRepository } from './git-helpers';
import { copyDocs, preprocessMdsInDirectory } from './md-helpers';
import { Constants } from './constants';

console.log('Publishing user documentation to the central docs repository...');

cloneDocsRepository()
    .then(() => {
        return copyDocs();
    })
    .then((prodDocsDirectoryInTheMainDocs) => {
        if(core.getInput('preprocess-plant-uml') === 'true') {
            return preprocessMdsInDirectory(path.join(Constants.MainDocsDirectory, prodDocsDirectoryInTheMainDocs))
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
