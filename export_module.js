// JavaScript File
const fs = require('fs');
const path = require('path');

module.exports = (dir, ext, callback) => {
    ext = `.${ext}`;
    fs.readdir(dir, (err, list) => {
        if (err) return callback(err); //handle error
        
        const filtered = list.filter(file => path.extname(file) === ext);
        
        return callback(null, filtered) //null is the error object as there are no errors
    })
} 