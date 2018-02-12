const assert = require('assert');

function greet(name) {
    return `hello ${name}`;
}

it('greets with hello <name>', () => {
    const greeting = greet('timmy');
    assert.equal(greeting, 'hello timmy');
});