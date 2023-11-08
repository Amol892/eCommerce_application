# eCommerce_application developement code
# Technologies used:
1) Backend server - Node.js
2) Frontend server - React.js
3) Database - MongoDB

# Nodejs server setup and dependancies install
>npm init -y (it creates package.json file which stores information about project and dependencies)

# Install Dependencies:
1) npm install express (Express.js for building the server)
2) npm install fs (fs (file system) to read the JSON file.)
3) npm install mongoose (mongoose for MongoDB database connections)
4) npm install body-parser (body-parser for parsing request bodies)
5) npm install cors
6) npm install -g nodemon  (for npm start commond) (add "start": "nodemon index.js" in package.json file)
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon app.js"
  }
7) npm install bcrypt
8) npm install jsonwebtoken (jsonwebtoken for authentication)
9) npm install dotenv
10) npm install crypto (for secret key genereation)
const crypto = require('crypto');
const secretKey = crypto.randomBytes(32).toString('hex');
console.log('Generated Secret Key:', secretKey);

# Reactjs server setup:
