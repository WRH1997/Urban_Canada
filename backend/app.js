<<<<<<< backend/app.js
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var connectDB = require("./utils/database");
var indexRouter = require("./routes/index");
var userRoutes = require("./routes/userRoutes");

var app = express();
require("dotenv").config();
=======
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var connectDB = require('./utils/database');
var indexRouter = require('./routes/index');
var ratingRouter = require('./routes/rating');
var cors = require('cors');
var userRoutes = require("./routes/userRoutes");


var app = express();
app.use(cors({origin:"*"}));
require('dotenv').config();
>>>>>>> backend/app.js

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

connectDB();

<<<<<<< backend/app.js
app.use("/", userRoutes);
app.use("/", indexRouter);
=======

app.use('/', indexRouter);
app.use('/rating',ratingRouter);

app.use("/", userRoutes);
>>>>>>> backend/app.js

app.use((req, res, next) => {
  res.status(404).send("404 - Route not found");
});

app.listen(process.env.PORT, () => {
  console.log(`${process.env.LOCALHOST}:${process.env.PORT}`);
});
