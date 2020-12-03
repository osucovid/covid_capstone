// /server/server.js
// for express
const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const port = process.env.PORT || 5000;

// const path = require("path");

//initialize app with express
const app = express();

// middleware for dependencies
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

const client = require('./config/keys').mongoURI;
MongoClient.connect(client, { promiseLibrary: Promise }, (err, db) => {
  if (err) {
    console.log(`Failed to connect to the database. ${err.stack}`);
  }
  app.locals.db = db;
  app.listen(port, () => {
    console.log(`Node.js app is listening at http://localhost:${port}`);
  });
});

const dashboard = require('./routes/api/dashboard');
app.use('/api/dashboard', dashboard);

const users = require('./routes/api/users');
app.use('/api/users', users);

//a simple crud function for posting
const posts = require("./routes/api/posts");
const { truncateSync } = require("fs");
// const users = require("./routes/api/users");

app.use("/api/posts", posts);

// mock data to send to our frontend
//handle production
if (process.env.NODE_ENV === "production") {
  //static folder - __dirname = current directory  and concatenate instead of using path module
  //look at that folder as our static folder
  app.use(express.static(__dirname + "/public/"));

  //handle spa - for any route
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

//port for heroku, localhost will run on 5000

//app.listen(port, () => console.log(`Server started on port ${port}`));