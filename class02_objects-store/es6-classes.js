
class Store {
    constructor() {
        this.state = {};
        this.listener = new Set();
    }

    setState() {

    }
}

class Person extends Store {
    constructor() {
        super();
        this.state = {
            name: 'Tammy'
        };
    }
}