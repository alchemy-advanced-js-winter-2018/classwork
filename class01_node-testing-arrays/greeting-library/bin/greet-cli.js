const getArgs = require('../lib/get-args');
const greet = require('../lib/greet');

const options = getArgs(process.argv);
const greeting = greet(options.name);

// eslint-disable-next-line
console.log(greeting);