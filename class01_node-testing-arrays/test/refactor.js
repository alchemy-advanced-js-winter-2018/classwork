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


    it('map', () => {
        const array = [1, 2, 3];

        const mapped = map(array, x => x * 2);

        assert.deepEqual(mapped, [2, 4, 6]);
    });

    describe('passes index as second arg to callback', () => {

        function testIndexes(name, fn) {
            it(name, () => {
                const array = [10, 20, 30];
                
                const indexes = [];
                fn(array, (each, i) => {
                    indexes[i] = i;
                });
    
                assert.deepEqual(indexes, [0, 1, 2]);
            });
        }
      
        testIndexes('forEach', forEach);
        testIndexes('map', map);
    });
});