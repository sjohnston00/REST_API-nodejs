const express = require('express');
const app = express();
const mongoose = require('mongoose')
require('dotenv/config');

//import the posts router
const postRouter = require('./routes/posts')
app.use('/posts', postRouter);


//ROUTES
app.get('/', (req, res) => {
    res.send('Home');
});

//open the server
app.listen(3000);


//Connecting to Cloud Db
mongoose.connect(process.env.DB_CONNECTION, 
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => {console.log('Connected to db');
});