// JavaScript File
const filter_module = require('./export_module'); //not a native module
const directory = process.argv[2];
const extension = process.argv[3];

filter_module(directory, extension, (err, filteredList) => {
    if (err) return console.error(err);
    filteredList.forEach(file => {
        console.log(file);
    });
});