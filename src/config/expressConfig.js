const express = require('express');
const path = require('path');

function staticFilesServe(app) {
    app.use('/static',express.static(path.join(__dirname,'../public')));
    app.use(express.urlencoded({extended: true}));
};

module.exports = staticFilesServe;