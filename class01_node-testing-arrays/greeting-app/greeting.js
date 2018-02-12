// 1. get the name from the input (cli arguments)
const name = process.argv[2];

// 2. Format a greeting using the inputs
const greeting = `hello ${name}`;

// 3. output the greeting
console.log(greeting);