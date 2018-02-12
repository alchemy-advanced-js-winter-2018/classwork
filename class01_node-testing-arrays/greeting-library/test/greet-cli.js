const childProcess = require('child_process');
const assert = require('assert');

it('runs cli and outputs correct greeting', () => {
    const output = childProcess.execSync(
        'node ./bin/greet-cli.js timmy', 
        { encoding: 'utf8' }
    );
    assert(output, 'hello timmy');
});