const fs = require('fs');

const readAssync = () => {
    let path = './createdFileAssync.txt';
    let options = {
        encoding: 'utf8',
        flag: 'r'
    };
    let callback = (err, data) => {
        if (err) {
            console.log('There was an error while reading the file');
            console.log(err);
            throw err;
        }
        console.log(data);
    };

    console.log('Before');
    fs.readFile(path, options, callback);
    console.log('After');
};

const readSync = () => {
    let path = './createdFileSync.txt';
    let options = {
        encoding: 'utf8',
        flag: 'r'
    };

    console.log('Before');
    try {
        let data = fs.readFileSync(path, options);
        console.log(data);
    } catch (err) {
        console.log('There was an error while reading the file');
        console.log(err);
        throw err;
    }
    console.log('After');
};


module.exports = {
    readAssync: readAssync,
    readSync: readSync
};
