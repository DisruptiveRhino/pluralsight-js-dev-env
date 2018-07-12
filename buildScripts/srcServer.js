// how to get a package using ES5 version of javascript
// var express = require("express");
// var path = require("path");
// var open = require("open");

// how to get a package using ES5 version of javascript
import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

//ES5
// var port = 3000;
// var app = express();

//Here is a way to disable a rule in the linting when you expect to use the thing you have set lint to check
/* eslint-disable no-console */

//ES6
const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  }
  else {
    open('http://localhost:' + port);
  }
});
