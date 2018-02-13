
function Person() {
    // initialization (constructor) logic
}

// prototype functions are shared by all instances,
// and we use "this" to refer to actual instance
Person.prototype.setState = function(newState) {
    this.foo = newState;
};

function SuperHero() {
    Person.constructor.call(this);
    // rest of initialization
}

SuperHero.prototype = Object.create(Person);


class Person {
    // optional if not needed
    constructor() {
        // initialization logic
    }

    // prototype methods go here
    setState(newState) {

    }
}