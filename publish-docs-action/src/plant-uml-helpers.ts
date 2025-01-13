import * as fs from 'fs';
import PlantUmlEncoder from 'plantuml-encoder';

export async function replacePlantUmlDiagramsInFile(filePath: string) {
    const content = fs.readFileSync(filePath, 'utf8');
    let lines = content.split('\n');

    let numberOfDiagrams = 0;

    let diagramStart = findDiagramStart(0, lines);

    while(diagramStart !== -1) {
        numberOfDiagrams++;

        const diagramOpeningTag = lines[diagramStart];

        const diagramEnd = findDiagramEnd(diagramStart + 1, lines);
        if(diagramEnd === -1) {
            throw new Error(`No closing \`\`\` found for PlantUml diagram ${diagramOpeningTag}`);
        }

        const diagramContent = lines
            .slice(diagramStart + 1, diagramEnd)
            .join('\n');

        // build diagram url
        const encodedPuml = PlantUmlEncoder.encode(diagramContent);
        let plantUmlUrl = `https://img.plantuml.biz/plantuml/png/${encodedPuml}`;

        lines = lines.slice(0, diagramStart)
        .concat([`![${getDiagramName(lines[diagramStart])}](${plantUmlUrl})`])
        .concat(lines.slice(diagramEnd + 1));

        diagramStart = findDiagramStart(diagramStart, lines);
    }

    if (numberOfDiagrams > 0) {
        console.log(`Replaced ${numberOfDiagrams} PlantUml diagrams in ${filePath}`);
        fs.writeFileSync(filePath, lines.join('\n'));
    }
    else {
        console.log(`No PlantUml diagrams found in ${filePath}`);
    }

}

function findDiagramStart(startFrom: number, lines: Array<string>): number {
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

function getDiagramName(openDiagramTag: string): string {
    var groups = /(\()(.+)(\))/g.exec(openDiagramTag);

    if(groups && groups.length > 3) {
        return groups[2];
    }
    return 'Diagram';
}