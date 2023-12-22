const express = require('express');
const app = express();
const ExpressError = require('./expressError');

//i'm actually writing an express server
//let's test it out and see if it runs

//divines help me for what i have just done
//there's a separate package.json file inside of my express folder now
//because to run my bot, the package.json has to be type: module
//but to run express, the package.json has to be type: commonjs
//i feel like this is the jankest workaround possible.
//it's disturbing enough that i'm going to git commit
//so that future engineers can gaze upon my codebase and despair

app.listen(3000, function() {
    console.log(`app on port 3000`);
  });