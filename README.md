## Synopsis

coding exercise - four end points.

- An endpoint that authenticates a user based on a login/password passed in a JSON payload and verifies against a Mongo DB database

- An endpoint that returns all users in the database filtered by city and group by profession.

- An endpoint that checks and returns the status of all components that it depends on (Is Mongo still up OK).

- An endpoint that when called returns the list of files in a given directory.

## Design decisions

NodeJS

ExpressJS - web application framework

MongoDB and MongooseJS - database

Passport - authentication

NLogger - logging

Mocha - testing

### Why Node JS

- Its fast
- Quick to prototype REST Api's


**Why Express JS?** : simple routing, sessions and POST body/ query string parsing.

### versioning

Routes have the following structure:


-- router/

-- -- routes/

-- -- -- index.js

-- -- -- v1/

-- -- -- -- files.js

...

-- -- -- v2/

-- -- -- -- files.js


index.js contains the route declarations
    app.use('/api/login', require('./routes/v1/login'));

for the new version, we could have the new routes in a directory called 'v2' and then re-declare the routes as below:
    app.use('/api/login', require('./routes/v2/login'));



### paging



## Database setup

database : **userDB**

collection : **users**

mongoimport --db userDB --collection users --type json --file users.json

### Alternate database setup

If the mongoimport tool does not work, then data can be etered through the mongo shell using th following set of commands :

db.users.save({"username":"jesse","name":"jesse","password": "jesse", "city":"LA", "profession":"designer" });

db.users.save({"username":"adam","name":"adam","password": "adam", "city":"LA", "profession":"designer" });

db.users.save({"username":"mike","name":"mike","password": "mike", "city":"LA", "profession":"designer" });

db.users.save({"username":"gus","name":"gus","password": "gus", "city":"LA", "profession":"programmer" });

db.users.save({"username":"tuco","name":"tuco","password": "tuco", "city":"DC", "profession":"programmer" });

db.users.save({"username":"marie","name":"marie","password": "marie", "city":"NY", "profession":"manager" });

db.users.save({"username":"hank","name":"hank","password": "hank", "city":"IL", "profession":"waiter" });

db.users.save({"username":"walt","name":"walt","password": "walt", "city":"DC", "profession":"manager" });



## Installation

Provide code examples and explanations of how to get the project.

## API Reference

### login
### users
### files
### status

## Tests

Describe and show how to run the tests with code examples.

## Contributors

Let people know how they can dive into the project, include important links to things like issue trackers, irc, twitter accounts if applicable.

## License

A short snippet describing the license (MIT, Apache, etc.)
