

class Person {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        return `hi, i am ${this ? this.name : 'oh noz!'}`;
    }
}

// "this" is whatever is on the left
// of the "." from the function call:

const person = new Person('johnny');
console.log(person.introduce());

const introduce = person.introduce;

console.log(introduce()); // this is "undefined"

console.log(introduce.call({ name: 'wat?' }));