const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const cookieParser = require("cookie-parser");
const {restrictToLoggedinUserOnly} = require("./middlewares/auth.js")
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');

const staticRoute = require("./routes/staticRouter.js");
const userRoute = require('./routes/user.js');
const predictRoute = require('./routes/predict.js');

//database
require("./src/db/conn.js");
const User = require("./src/models/users.js");
const { Collection } = require("mongoose");
const { error } = require("console");


app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname, "/views"));

app.use(express.urlencoded({extended : true}));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname , "/public")));
app.use(cookieParser());

const sessionOptions = {
  secret: 'glucoSage',
  resave: false,
  saveUninitialized: true,
  cookie: {
      expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    },
  };

  app.get("/", (req, res) => {
    res.send("Hi, This is root!");
  });
  

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  res.locals.userData = req.body;
  next();
});


app.use("/", staticRoute);
app.use("/", userRoute);
app.use("/", predictRoute);

// app.use((err, req, res, next) => {
//     let { statusCode = 500, message = "Something went Wrong!" } = err;
//     res.status(statusCode).render("errors.ejs", { message });
//     // res.status( ).send(message);
// });

app.listen("8080" , () => {
    console.log("port is listening");
  })