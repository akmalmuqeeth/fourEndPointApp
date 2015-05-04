## coding exercise - four endpoints API

- An endpoint that authenticates a user based on a login/password passed in a JSON payload and verifies against a Mongo DB database

- An endpoint that returns all users in the database filtered by city and group by profession.

- An endpoint that checks and returns the status of all components that it depends on (Is Mongo still up OK).

- An endpoint that when called returns the list of files in a given directory.

## Installation

clone the github project : ```git clone https://github.com/akmalmuqeeth/fourEndPointApp.git```

install dependencies : ```navigate to folder and run npm install```

## Database setup

database : **userDB**

collection : **users**

#### import database
mongoimport --db userDB --collection users --type json --file users.json

### Alternate database setup

follow the instructions in manual_db_setup.txt

## Start application 

from the application directory, run

```node server.js```

## API Reference

### login
curl -H "Content-Type: application/json" -X POST -d '{"username":"jesse","password":"jesse"}' http://127.0.0.1:8080/api/login

### users
curl -i -H "Accept: application/json" "http://127.0.0.1:8080/api/users/DC"

### files
curl -i -H "Accept: application/json" "http://127.0.0.1:8080/api/files/middlewares"

### status
curl -i -H "Accept: application/json" "http://127.0.0.1:8080/api/status"

## Technologies used

NodeJS

ExpressJS - web application framework

MongoDB and MongooseJS - database

Passport - authentication

NLogger - logging

Mocha - testing

### Why Node JS

- Its fast
- Quick to prototype REST Api's
- Good mongoDB support
- first made a one file application to quickly prototype the application : ```https://github.com/akmalmuqeeth/codeApp``` , then split this into a modular structure


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

    ```app.use('/api/login', require('./routes/v1/login'));```

for the new version, we could have the new routes in a directory called 'v2' and then re-declare the routes as below:

    ```app.use('/api/login', require('./routes/v2/login'));```

### Pagination

The users api might require paging once the database gets larger. 

One way to achieve this is by adding two URL parameters to the API:

size : number of records to return
pageNumber: depending on the size, which page of data should be returned

in the users.js route, we would then use these params

```UserModel.find(query, fields, { skip: size * pageNumber, limit: size }, function(err, results) { ... });```

### Tests
- install mocha 

```npm install -g mocha```

- navigating to the main directory run the tests 

``` mocha ```

