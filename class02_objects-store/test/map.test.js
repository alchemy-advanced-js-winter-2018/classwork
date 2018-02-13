const assert = require('assert');

describe.skip('maps (aka dictionaries) in JavaScript', () => {
    it('uses an object as a dictionary', () => {
        const dict = {};
        dict['key1'] = 'value1';
        assert.equal(dict.key1, 'value1');
    });

    it.skip('does not handle object references well', () => {
        // toString on keys:
        const listener = () => {};
        const otherListener = () => {};
        const dict = {};
        dict[listener] = listener;
        dict[otherListener] = otherListener;

        assert.equal(dict[listener], listener);

    });



});