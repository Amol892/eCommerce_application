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
1) npx create-react-app app_name
2) cd app_name
3) npm install bootstrap
4) npm install react-router-dom
5) npm install react-hook-form
6) npm install axios
7) npm start
8) add into package.json file : "proxy":"http://localhost:8000"

# Application images:
-> Signup page
![Signup](https://github.com/Amol892/eCommerce_application/assets/114909137/b2724b30-b3ab-411e-a254-c59365012e11)

-> Login page
![Login](https://github.com/Amol892/eCommerce_application/assets/114909137/c38b56be-e807-4be6-8750-649c9a3fd15d)

-> Home page : Product list with Add to cart button
![product_list](https://github.com/Amol892/eCommerce_application/assets/114909137/edf184a6-d794-411a-a823-bb26fbc73f4b)

-> Cart page : items list with delete button
![Cart_list_delete_item](https://github.com/Amol892/eCommerce_application/assets/114909137/ae04d07f-2614-40e7-b142-bbb9c377783c)

-> Search result page : Product search by product name
![Search_result](https://github.com/Amol892/eCommerce_application/assets/114909137/e7382d75-83e6-48f5-9acc-ebeece7cb70f)

