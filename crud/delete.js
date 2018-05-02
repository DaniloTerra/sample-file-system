const fs = require('fs');

const deleteAssync = () => {
    let path = './createdFileAssync.txt';

    console.log('Before delete');
    fs.unlink(path, (err) => {
        if (err) {
            console.log('There was an error while deleting the file');
            throw err;
        }
        console.log('Deleted');
    });
    console.log('After delete');
};

const deleteSync = () => {
    try {
        let path = './createdFileSync.txt';
        console.log('Before delete');
        fs.unlinkSync(path);
        console.log('Deleted');
        console.log('After delete');
    } catch (err) {
        if (err) {
            console.log('There was an error while deleting the file');
            throw err;
        }
    }
};

module.exports = {
    deleteAssync: deleteAssync,
    deleteSync: deleteSync
};
