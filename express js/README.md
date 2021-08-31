# Express.js crash on course

[Video here](https://youtu.be/L72fhGm1tfE)

Express.js is by far the most popular web framework for Node.js. Other frameworks include: Hapi js, Adonis js (higher lever, not as much freedom), Koba js.

- Fast: High performance
- Unopinionated: Very basic at its core, not a high level framework like the ones for Python and PHP. Does not assume one is building the app/API in a certain way
- Minimalist: Have full control on what the server takes and responds

It is a server-side or back-end framework. It is used in combination with front-end frameworks to make full web apps.

## Why to use Express

- It is much easier than building web apps with Node.js
- Used for both rendered apps as well as API/Microservices
- Extremely light, fast and free
- Full control of the request and response
- It's all JS

## Basic route handling

- Handling requests/routes is simple
- app.get('/', function(req, res)):
    - Fetch from database
    - Load pages
    - Return JSON
    - Full access to request and response    
, app.post(), app.put(), app.delete(), etc
- Acess to params, query strings, url parts, etc
- Express has a route so we can store routes on separate files and export
- We can parse incoming data with the Body Parser

## Express Middleware

They are functions that have access to the request and response object. Express has built in middleware, but middleware also comes from 3rd party packages as well as custom middleware.

Stack of functions that excecute whenever a request is made to the server.