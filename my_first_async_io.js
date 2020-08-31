// JavaScript File
const fs = require('fs'); //loads the fs module from node.js

fs.readFile(process.argv[2], 'utf8', (err, string) => {
	if (err) return console.error(err);
	const result = string.split('\n').length - 1;
	console.log(result);
}); //returns contents of file

/*notes:
utf8 is 1 to 4 8-bit bytes of binary data
*/
