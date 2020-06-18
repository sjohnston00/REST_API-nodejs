const express = require('express');
const app = express();
const mongoose = require('mongoose')
require('dotenv/config');
//MIDDLEWARE (used to run functions when a specific route is hit)
app.use('/posts', () =>{
    console.log('middleware function run when /posts is hit')
});

//ROUTES
app.get('/', (req, res) => {
    res.send('Home');
});


app.get('/posts', (req, res) => {
    res.send('Posts');
});
//open the server
app.listen(3000);


//Connecting to Cloud Db
mongoose.connect(process.env.DB_CONNECTION, 
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => {console.log('Connected to db');
});