const assert = require('assert');
const forEach = require('../lib/for-each');
const map = require('../lib/map');
const filter = require('../lib/filter');
const findIndex = require('../lib/find-index');
const every = require('../lib/every');
const reduce = require('../lib/reduce');

describe('array methods', () => {
    
    it('forEach', () => {
        const array = ['a', 'b', 'c'];
        let result = '';
        forEach(array, each => result += each);
        assert.equal(result, 'abc');
    });

    it('map', () => {
        const array = [1, 2, 3];
        const mapped = map(array, x => x * 2);
        assert.deepEqual(mapped, [2, 4, 6]);
    });

    it('filter', () => {
        const array = [2, 8, 1, 10];
        const filtered = filter(array, x => x > 5);
        assert.deepEqual(filtered, [8, 10]);
    });

    it('findIndex', () => {
        const array = [2, 8, 8, 10];
        const index = findIndex(array, x => x === 8);
        assert.deepEqual(index, 1);
    });

    it('every true', () => {
        const array = [2, 8, 8, 10];
        const isEvery = every(array, x => x > 1);
        assert.equal(isEvery, true);
    });

    it('every false', () => {
        const array = [8, 8, 2, 10];
        const isEvery = every(array, x => x > 5);
        assert.equal(isEvery, false);
    });

    it('reduce with accumulator', () => {
        const array = [1, 2, 3, 4];
        const sum = reduce(array, (n, i) => n + i, 10);
        assert.equal(sum, 20);
    });

    it('reduce no accumulator', () => {
        const array = [1, 2, 3, 4];
        const sum = reduce(array, (n, i) => n + i);
        assert.equal(sum, 10);
    });

    describe('passes index as second arg to callback', () => {

        const recordIndex = returnValue => indexes => (e, i) => (indexes[i] = i, returnValue);
        const recordIndexReturnTrue = recordIndex(true);
        const recordIndexReturnFalse = recordIndex(false);

        function testIndexes(name, fn, makeCallback = recordIndexReturnTrue) {
            it(name, () => {
                const array = [10, 20, 30];
                
                const indexes = [];
                const callback = makeCallback(indexes);
                fn(array, callback, null);
    
                assert.deepEqual(indexes, [0, 1, 2]);
            });
        }
      
        testIndexes('forEach', forEach);
        testIndexes('map', map);
        testIndexes('filter', filter);
        testIndexes('findIndex', findIndex, recordIndexReturnFalse);
        testIndexes('every', every);
        testIndexes('reduce', reduce, indexes => {
            return (acc, each, i) => indexes[i] = i;
        });
    });
});