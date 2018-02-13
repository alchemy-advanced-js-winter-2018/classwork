const assert = require('assert');
const Store = require('../lib/Store');

describe.skip('state store', () => {
    it('state is updated', () => {
        const store = new Store();
        store.setState({ name: 'tammy' });
        assert.deepEqual(store.state, { name: 'tammy' });
    });
    
    it('state only updates provided keys', () => {
        const store = new Store();
        store.setState({ name: 'tammy' });
        store.setState({ color: 'blue' });
        assert.deepEqual(store.state, { 
            name: 'tammy',
            color: 'blue'
        });
    });

    it('calls subscriber', () => {
        const store = new Store();
        let called = false;
        store.subscribe(() => called = true);
        assert.equal(called, false);
        store.setState({ name: 'joey' });
        assert.equal(called, true);
    });

    it('handles multiple subscribers', () => {
        const store = new Store();
        let called1 = false;
        let called2 = false;
        store.subscribe(() => called1 = true);
        store.subscribe(() => called2 = true);

        store.setState({ name: 'joey' });
        assert.equal(called1, true);        
        assert.equal(called2, true);        
    });
});