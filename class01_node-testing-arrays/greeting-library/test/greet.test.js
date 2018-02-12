const assert = require('assert');
const greet = require('../lib/greet');

it('greets with hello <name>', () => {
    const greeting = greet('timmy');
    assert.equal(greeting, 'hello timmy');
});

it('greets with hello stranger when no name provided', () => {
    const greeting = greet();
    assert.equal(greeting, 'hello stranger');
});