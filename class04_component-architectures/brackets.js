
// 1. Blocks of code
if(true) {
  const x = 12;
}

function add(x, y) {

}

// 2. Object literals
const toy = 'baloon';

const person = {
  first: 'linda',
  last: 'thompson',
  color: 'blue',
  toy  //short-hand sytax for prop same name as variable
};

// 3. Destructuring (applies to thing being assign)
const { name, color } = person;
// same as
// const name = person.name;
// const color = person.color;

function makeFullName({ first, last }) {
  //
}

makeFullName(person);

// 4. Named imports (and exports)
// assume file foo.js has:
export function add(x, y) { /*...*/ }
export function subtract(x, y) { /*...*/ }

// then:
import { add, subtract } from './foo';

// foo could also have been written as:
function add(x, y) { /*...*/ }
function subtract(x, y) { /*...*/ }
export { add, subtract }

// 5. Template literal interpolators
const message = `Hello ${person.first}`;

// 6. React interpolators
<div>{this.props.name}</div>


// Misc

// "dumbbell" functions

connect(
  ({ user, news }) => ({ user, news }),
  null
)

// vs:
state => {
  const user = state.user;
  const news = state.news;
  return {
    user: user,
    news: news
  };
}