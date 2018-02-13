const assert = require('assert');
const add = require('../lib/add');

it('add two numbers', () => {
    assert.equal(add(1, 2), 3);
});