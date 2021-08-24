const fs = require('fs');
const path = require('path');

// Create a folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw err;
//     console.log('Folder created...');
// });

// Create and write to file - It overwrites
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello world!', err => {
//     if (err) throw err;
//     console.log('Folder written to...');

//     // File append
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'),
//         'I love Node.js!', err => {
//             if (err) throw err;
//             console.log('Folder written to...');
//         });
// });

// Read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// Rename file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), (err, data) => {
    if (err) throw err;
    console.log('File renamed...');
});