const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());


//import the posts router
const postRouter = require('./routes/posts')
app.use('/posts', postRouter);


//ROUTES 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html')) //rendering a simple HTML file
});

//open the server
app.listen(3000);


//Connecting to Cloud Db
mongoose.connect(process.env.DB_CONNECTION, 
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => {console.log('Connected to db');
});