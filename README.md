# eCommerce_application developement code
# Technologies used:
1) Backend server - Node.js
2) Frontend server - React.js
3) Database - MongoDB

# Nodejs server setup and dependancies install
>npm init -y (it creates package.json file which stores information about project and dependencies)

# Install Dependencies:
> npm install express (Express.js for building the server)
> npm install fs (fs (file system) to read the JSON file.)
> npm install mongoose (mongoose for MongoDB database connections)
> npm install body-parser (body-parser for parsing request bodies)

> npm install cors 
> npm install -g nodemon  (for npm start commond) (add "start": "nodemon index.js" in package.json file)
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon app.js"
  }

> npm install bcrypt
> npm install jsonwebtoken (jsonwebtoken for authentication)
> npm install dotenv
> npm install crypto (for secret key genereation)
const crypto = require('crypto');
const secretKey = crypto.randomBytes(32).toString('hex');
console.log('Generated Secret Key:', secretKey);
