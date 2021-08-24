# Node.js crash on course

[Video here](https://www.youtube.com/watch?v=fBNz5xF-Kx4&list=PLillGF-RfqbYeckUaD1z6nviTp31GLTH8&index=8&ab_channel=TraversyMedia)

## What is it?

- JavaScript Runtime (NOT a language or a framework)
- Built on the V8 JavaScript engine (Same as Google Chrome)
- Written in C++
- Allows to run JS code on the server

## Why node?

- Fast, efficient and high scalable
- Event driven, non-blocking I/O model
    - Works on a single thread (asyncronous), using non-blocking I/O calls
    - Supports tens of thousands current connections
    - EventEmitter class is used to bind events and listenters
- Popular in the industry
- Same language in the front and back end

## What in node?

- REST API & Microservices
- Real Time Services (Chat, Live updates)
- CRUD Apps - Blogs, Shopping Carts, Social Networks
- Tools & Utilities as long as not cpu intensive

Anything that is not CPU intensive

## What is npm?

- To install 2rd party packages (frameworks, libraries, tools, etc)
- Those packages get stored in a `package.json` file
- NPM scripts can also be created
- Some commands:
    - `npm init` To create a package.json file
    - `npm install <package name>` To install locally in the app folder
    - `npm install -g <package name>` To install glocally

## Node modules

- There are some core modules (path, fs, http, etc)
- Third party modules/packages installed via npm
- Also possible to load and use Custom Modules (files)

```
const path = require('<module name>');
const myFile = require('./<module name>');
```

## Hands on learning

- To install a package only for dev purposes: `npm install -D <pkg name>`
- To run a node file: `node <file name>` the filename can have or not the file extension
- Requiring and exporting modules: person.js and index.js

## Node core modules

- If the method is the async version it takes a callback and if syncronous does not take it and will wait the method to finish before keep going. By default use the async version.