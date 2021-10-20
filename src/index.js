const express = require('express');
const app = express();
const routes = require('./routes')
const port = 5000;

const hbsConfig = require('./config/handlebarsConfig');
hbsConfig(app);

const serveFiles = require('./config/expressConfig');
serveFiles(app);
app.use(routes)

app.listen(port)