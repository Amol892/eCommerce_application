const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8000;
const routes = require('./routes/api_router')
const bodyParser = require('body-parser');

const corsOptions = {
    origin: 'http://localhost:3000', // Replace with your frontend's URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow cookies and authentication headers
  };
// Middleware for parsing JSON data
app.use(express.json());

// Enable CORS
app.use(cors(corsOptions));


// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
 }));

app.use(bodyParser.json());

// routers
app.use('/', routes)

// Connect to MongoDB
mongoose.connect('mongodb://0.0.0.0:27017/dayshop');

const db = mongoose.connection;
// Added check for DB connection
if(!db){console.log("Error connecting db")}else{console.log("Db connected successfully")}


// default router
app.get('/',(req,res)=>{
    res.send('Hello world');
});

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
});