const assert = require('assert');
const forEach = require('../lib/for-each');
const map = require('../lib/map');

describe('array methods', () => {
  
    it('forEach', () => {
        const array = ['a', 'b', 'c'];
        
        let result = '';
        forEach(array, each => {
            result += each;
        });

        assert.equal(result, 'abc');
    });

    it('forEach passes index as second argument to callback', () => {
        const array = ['a', 'b', 'c'];
        
        const indexes = [];
        forEach(array, (each, i) => {
            indexes[i] = i;
        });

        assert.deepEqual(indexes, [0, 1, 2]);
    });

    it('map', () => {
        const array = [1, 2, 3];

        const mapped = map(array, x => x * 2);

        assert.deepEqual(mapped, [2, 4, 6]);
    });

    it('map passes index as second argument to callback', () => {
        const array = [1, 2, 3];

        const indexes = [];
        map(array, (each, i) => {
            indexes[i] = i;
        });

        assert.deepEqual(indexes, [0, 1, 2]);
    });
});