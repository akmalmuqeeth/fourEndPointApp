## Synopsis

At the top of the file there should be a short introduction and/ or overview that explains **what** the project is. This description should match descriptions added for package managers (Gemspec, package.json, etc.)

## Design decisions

Show what the library does as concisely as possible, developers should be able to figure out **how** your project solves their problem by looking at the code example. Make sure the API you are showing off is obvious, and that your code is short and concise.

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
