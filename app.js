const express = require("express");
fs = require("fs");
readline = require("readline");
google = require("googleapis");
request = require("request");
const app = express();


// const covRoute = require('./routes/cov');

// app.use(express.static(_dirname+'/public'));

//Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}))

//Import Route 
const covRoute = require('./routes/cov');

//Use View Engine
app.set('view engine','ejs')

//Middleware route
app.use('/', covRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log('Server starting at port ${PORT}'));