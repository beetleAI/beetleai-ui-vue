/**
 * Created by cristian.jora on 04.11.2016.
 */
const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
const app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 5000;

app.listen(port);

console.log('server started '+ port);