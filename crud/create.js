const fs = require('fs');

const createAssync = () => {
    let file = './createdFileAssync.txt';
    let data = 'This file was created asynchronously';
    let options = {
        encoding: 'utf8',
        mode: 0o666,
        flag: 'w'
    };

    console.log('Before');
    fs.writeFile(file, data, options, (err) => {
        if (err) {
            console.log('There was an error while writting the file');
            console.log(err);
            throw err;
        }
        console.log('The file was successfully created');
    });
    console.log('After');
};

const createSync = () => {
    let file = './createdFileSync.txt';
    let data = 'This file was created synchronously';
    let options = {
        encoding: 'utf8',
        mode: 0o666,
        flag: 'w'
    };

    console.log('Before');
    try {
        fs.writeFileSync(file, data, options);
    } catch (err) {
        console.log('There was an error while writting the file');
        throw err;
    }
    console.log('After');
    console.log('The file was successfully created');
};

module.exports = {
    createAssync: createAssync,
    createSync: createSync
};
