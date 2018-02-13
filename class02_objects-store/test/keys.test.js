const assert = require('assert');

it('applies new keys', () => {
    const obj = {
        key1: 'key1',
        key2: 'key2'
    };

    const update = {
        key1: 'keyOne'
    };

    // Object.keys(update).forEach(key => {
    //     obj[key] = update[key];
    // });

    Object.assign(obj, update);

    assert.deepEqual(obj, {
        key1: 'keyOne',
        key2: 'key2'
    });
});