var ncp = require('child_process');
var process = require('process');
var fs = require('fs');

var run = function (cl, inheritStreams, cwd) {

    console.log();
    console.log('> ' + cl);

    var options = {
        cwd: cwd,
        stdio: inheritStreams ? 'inherit' : 'pipe',
    };
    var rc = 0;
    var output;
    try {
        output = ncp.execSync(cl, options);
    }
    catch (err) {
        if (!inheritStreams) {
            console.error(err.output ? err.output.toString() : err.message);
        }

        process.exit(1);
    }

    return (output || '').toString().trim();
}

var CLI = {};

CLI.build = function() {
    run('npm install', true);
    run('npm run lint', true);
    run('tsc --rootDir src');
    run('ncc build index.js -o "../"', true, 'src');
}


var command  = process.argv[2];
console.log(command);

if (typeof CLI[command] !== 'function') {
  fail('Invalid CLI command: "' + command + '"\r\nValid commands:' + Object.keys(CLI));
}

CLI[command]();
