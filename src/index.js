const express = require('express');
const app = express();
const port = 5000;

const hbsConfig = require('./config/handlebarsConfig');
hbsConfig(app);

const serveFiles = require('./config/expressConfig');
serveFiles(app);

app.get('/',(req,res)=>{
    res.render('home',{layout:false});
});

app.listen(port)