const express = require("express");
const app = express();

const covRoute = require('./routes/cov');

//Use View Engine
app.set('view engine','ejs')

//Middleware route
app.use('/test', covRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log('Server starting at port ${PORT}'));