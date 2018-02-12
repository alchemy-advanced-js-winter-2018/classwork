const assert = require('assert');
const getArgs = require('../lib/get-args');

describe('options from process args', () => {

    it('gets name from process args', () => {
        const options = getArgs(['node', 'greeting-cli.js', 'timmy']);
        assert.deepEqual(options, { name: 'timmy' });
    });
    
});
