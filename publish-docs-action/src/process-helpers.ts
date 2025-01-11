import * as child_process from 'node:child_process';
import { wait } from './utils';

export function run(cmd: string, args: Array<string>, cwd: string | null): Promise<string> {

    var command = cmd + ' ' + args.join(' ');
    console.log(`Running command: ${command}`);

    return new Promise((resolve, reject) => {
        var options: child_process.SpawnOptionsWithoutStdio = {};

        if(cwd) {
            options.cwd = cwd;
        }

        let output = ''; 
        const process = child_process.spawn(cmd, args, options);

        process.stdout.on('data', (data: any) => {
            if(data) {
                console.log(`stdout: ${data}`);
                output += data;
            }
        });
        
        process.stderr.on('data', (data:any) => {
            if(data) {
                console.error(`stderr: ${data}`);
            }
        });
        
        process.on('close', (code:any) => {
            if(code !== 0) {
                reject(`Command [${command}] execution error. Exit code: ${code}`); 
            }

            // wait for 5 seconds to flush the output
            wait(5 * 1000).then(() => { resolve(output); });
        });
    });
}