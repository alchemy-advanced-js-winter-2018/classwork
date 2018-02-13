const assert = require('assert');
const add = require('../lib/add');

it.skip('adds two numbers', () => {
    const sum = add(1, 2);
    assert.equal(sum, 3);
});