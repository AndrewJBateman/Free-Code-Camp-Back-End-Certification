// JavaScript File
const fs = require('fs'); //loads the fs module from node.js 

const buffer = fs.readFileSync(process.argv[2]); //returns contents of file

const output = buffer.toString().split(`\n`).length -1;

console.log(output);


