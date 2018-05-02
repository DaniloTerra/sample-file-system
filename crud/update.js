const fs = require('fs');

const assync = () => {
    let path = './createdFileAssync.txt';
    let options = {
        encoding: 'utf8',
        flag: 'r'
    };

    console.log('Before read');
    fs.readFile(path, options, (err, data) => {
        if (err) {
            console.log('There was an error while reading the file');
            throw err;
        }
        let file = './createdFileAssync.txt';
        let newData = `${data}\nThis content was appended to this file asynchronously`;
        let options = {
            encoding: 'utf8',
            mode: 0o666,
            flag: 'w'
        };

        console.log('Before write');
        fs.writeFile(file, newData, options, (err) => {
            if (err) {
                console.log('There was an error while writting the file');
                throw err;
            }
        });
        console.log('After write');
    });
    console.log('After read');
};

const sync = () => {
    try {
        let path = './createdFileSync.txt';
        let optionsRead = {
            encoding: 'utf8',
            flag: 'r'
        };
        let data = fs.readFileSync(path, optionsRead);

        let file = './createdFileSync.txt';
        let dataWrite = `${data}\nThis content was appended to this file synchronously`;
        let optionsWrite = {
            encoding: 'utf8',
            flag: 'w'
        };

        fs.writeFileSync(file, dataWrite, optionsWrite);
    } catch (err) {
        console.log('There was an erro while updating the file');
        console.log(err);
        throw err;
    }
};

module.exports = {
    appendAssync: assync,
    appendSync: sync
};
