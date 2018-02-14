const fs = require('fs');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);

function getDirectoryContents(dir) {
    console.log('running getDirectoryContents');
    return readdir(dir).then(files => {
        return Promise.all(files.map(file => {
            return readFile(`${dir}/${file}`, 'utf8');
        }));
    });
}

const promise = getDirectoryContents('files');

promise
    .then(contents => {
        console.log('ALL DONE');
        console.log(contents);
    })
    .catch(err => {
        console.log('ERROR!!!', err);
    });

const promise2 = promise.then(contents => {
    console.log('contents again!', contents);
});

const p3 = promise2.then(() => readdir('.'));

p3.then(files => console.log(files));

