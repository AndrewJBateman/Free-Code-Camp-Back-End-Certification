// JavaScript File
const fs = require('fs'); //loads the file system module from node.js 
const path = require('path'); //utilities for working with file and directory paths

const directory = process.argv[2];
const extension = `.${process.argv[3]}`; //template literal substitution

fs.readdir(directory, (err, list) => {
    if (err) return console.error(err);
    list.forEach(file => {
        if (path.extname(file) === extension){
            console.log(file);
        }
    });
});

/*notes
fs.readdir reads the contents of a directory. gets 2 arguments: err and files 
(array of the names of the files in the directory). 
*/