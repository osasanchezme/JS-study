const path = require('path')

// Basename
console.log(__filename) // The whole path to the file and the file itself
console.log(path.basename(__filename)); // Only the actual file name

// Directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename))
console.log(path.parse(__filename).root)

// Concatenate, works cross platform
console.log(path.join(__dirname, 'test', 'hello.html'))