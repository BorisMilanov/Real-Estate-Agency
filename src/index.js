const express = require('express');
const app = express();
const port = 5000;

const hbsConfig = require('./config/handlebarsConfig')
hbsConfig(app)

app.get('/',(req,res)=>{
    res.render('home',{layout:false});
});

app.listen(port)