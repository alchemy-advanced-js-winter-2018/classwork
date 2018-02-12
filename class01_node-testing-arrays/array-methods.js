const fs = require('fs');

console.log('start');

const output = [1, 2, 3, 5].map(n => n + 1);

console.log(output);

console.log('end');


// contrast to async code:

// console.log('start file read');

// fs.readdir('.', (err, files) => {
//     console.log('files!', files);
// });

// console.log('end file read code');