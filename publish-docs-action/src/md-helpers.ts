import * as core from '@actions/core';
import { Constants } from './constants';
import * as fs from 'fs';
import path from 'path';
import PlantUmlEncoder from 'plantuml-encoder';

const env = process.env as any;

// copy the markdown files from the build directory to the docs repository
export async function copyDocs(): Promise<string> {
    let docsSubDirectory = core.getInput('target-docs-path');
    if(!docsSubDirectory) {
        console.log('No target-docs-path provided. We will use the current repository name as a docs sub-directory.');
        docsSubDirectory = env.GITHUB_REPOSITORY.split('/')[1];
    }
    const sourceDirectory = core.getInput('source-docs-path') + "/";
    const targetDirectory = `${Constants.MainDocsDirectory}/${docsSubDirectory}`;
    console.log(`Copying the files from ${sourceDirectory} to ${targetDirectory}...`);

    if (!fs.existsSync(targetDirectory)) {
        fs.mkdirSync(targetDirectory);
    }
    // copy all files recursively
    fs.cpSync(sourceDirectory, targetDirectory, {recursive: true, filter: (src: string) => {
        // we use this filter to log the files being copied
        console.log(`Copying ${src}`);
        return true; // copy all files
    }});

    return docsSubDirectory;
}

export async function preprocessMdsInDirectory(directory: string): Promise<void> {
    // iterate over all markdown files in the directory and preprocess them
    console.log(`Preprocessing markdown files in ${directory}...`);

    const files = getFiles(directory);

    for (let i = 0; i < files.length; i++) {

        if(path.extname(files[i]) !== '.md') {
            console.log(`Skipping ${files[i]}`);
            continue;
        }

        console.log(`Preprocessing ${files[i]}...`);
        let content = fs.readFileSync(files[i], 'utf8');
        content = await preprocessPlantUmlDiagrams(content, path.dirname(files[i]));
        fs.writeFileSync(files[i], content);
    }
}

async function preprocessPlantUmlDiagrams(content: string, imagesDir: string): Promise<string> {

    let processingResult = await precessFirstUmlDiagram(content, imagesDir)

    if(!processingResult.diagramCreated) {
        console.log('No PlantUml diagrams found in the file.');
        return content;
    }
    let numberOfDiagrams = 0;
    while(processingResult.diagramCreated) {
        content = processingResult.content;
        numberOfDiagrams++;
        processingResult = await precessFirstUmlDiagram(content, imagesDir);
    }

    console.log(`Preprocessed ${numberOfDiagrams} PlantUml diagrams`);
    return  content;
}

async function precessFirstUmlDiagram(content: string, imagesDir: string)
: Promise<{ diagramCreated: boolean, content: string }> {
    const diagramStartPattern = /```plantuml/g;
    const diagramEndPattern = /```/g;

    var lines = content.split('\n');
    var diagramStart = findDiagramStart(lines);
    var diagramEnd = findDiagramEnd(diagramStart, lines);
    
    // no diagram found
    if(diagramStart === -1) {
        return { diagramCreated: false, content: content };
    }

    // no closing ``` found
    if(diagramEnd === -1) {
        throw new Error('PlantUml diagram is not closed');
    }

    let diagramCode = lines.slice(diagramStart + 1, diagramEnd - 1).join('\n');
    
    // get UTF8
    let encodedPuml = PlantUmlEncoder.encode(diagramCode);
    let plantUmlUrl = `https://img.plantuml.biz/plantuml/png/${encodedPuml}`;

    content = lines.slice(0, diagramStart)
        .concat([`![${getDiagramName(lines[diagramStart])}](${plantUmlUrl})`])
        .concat(lines.slice(diagramEnd + 1))
        .join('\n');

    return { diagramCreated: true, content: content };
}

function findDiagramStart(lines: Array<string>): number {
    const diagramStartPattern = /```plantuml/g;
    for (let i = 0; i < lines.length; i++) {
        if(diagramStartPattern.test(lines[i])) {
            return i;
        }
    }
    return -1;
}

function findDiagramEnd(startFrom: number, lines: Array<string>): number {
    const diagramEndPattern = /```/g;
    for (let i = startFrom + 1; i < lines.length; i++) {
        if(diagramEndPattern.test(lines[i])) {
            return i;
        }
    }
    return -1;
}

function getFiles(dir: string): Array<string> {
    const fsEntries = fs.readdirSync(dir, { withFileTypes: true });
    let res: string[] = [];
    for (let i = 0; i < fsEntries.length; i++) {
      if (fsEntries[i].isDirectory()) {
        res = res.concat(getFiles(path.join(dir, fsEntries[i].name)));
      } else {
        res = res.concat([path.join(dir, fsEntries[i].name)]);
      }
    }
    return res;
}

function getDiagramName(openDiagramTag: string): string {
    var groups = /(\()(.+)(\))/g.exec(openDiagramTag);

    if(groups && groups.length > 3) {
        return groups[2];
    }
    return 'Diagram';
}