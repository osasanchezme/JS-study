const express = require('express'); // Common JS module import

// Init express
const app = express();

// Create your endpoints/route handlers
app.get('/', function(req, res){
    res.send('Hello world!');
});

// Listen in a port
app.listen(5000);