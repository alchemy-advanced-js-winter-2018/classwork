const fs = require('fs');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);

async function getDirectoryContents(dir) {
    const files = await readdir(dir);
    const contents = await Promise.all(files.map(file => {
        return readFile(`${dir}/${file}`, 'utf8');
    }));

    return contents;
}

async function run() {
    try {
        const contents = await getDirectoryContents('files');
        console.log('ALL DONE');
        console.log(contents);
    }
    catch(err) {
        console.log('ERROR!!!', err);
    }
}

run();