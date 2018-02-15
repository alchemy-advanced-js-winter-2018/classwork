const assert = require('assert');
const EventEmitter = require('events');

class Person {
  constructor(name) {
    this.name = name
  }

  sayHi() {
    return `my name is ${this ? this.name : 'I have no "this" context'}`;
  }
}


const linda = new Person('linda');
const fredric = new Person('fredric');

assert.strictEqual(linda.sayHi, fredric.sayHi);

console.log(linda.sayHi());
const sayHi = linda.sayHi;
console.log(sayHi());

const clown = { name: 'clown' };
clown.laugh = sayHi;

console.log(clown.laugh());

const boundSayHi = sayHi.bind({ name: 'forever' });
console.log('bind', boundSayHi.call({ name: 'override' }));

function add(x, y) {
  return x + y;
}

console.log(add.call(null, 4, 7));
console.log(add.apply(null, [4, 7]));

const button = new EventEmitter();

class Some {

  constructor(name) {
    this.name = name;
  }

  handleClick() {
    const name = 'other name';
    console.log(this.name);
  }

  renderBad() {
    // this won't work!!!
    button.on('click', this.handleClick);
  }

  render() {
    button.on('click', () => {
      // this will work!
      this.handleClick();
    });
  }
}


const some = new Some('name');
some.renderBad();
button.emit('click');