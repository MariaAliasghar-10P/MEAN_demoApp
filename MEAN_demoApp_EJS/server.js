const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = express.Router();
const appRoutes = require("./app/routes/Api")(router);
const path = require("path");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use("/api", appRoutes);

app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost:27017/tutorial", (err) => {
  if (err) {
    console.log("Not connected to the Database : " + err);
  } else {
    console.log("Successfully connected to MongoDB");
  }
});

// app.get('/' , (req,res)=>{
//     res.send("hello world");
// })




// app.get('/', function(req, res) {
//     res.render('index');
// });

// app.get('/home', function(req, res) {
//   res.render('home');
// });

// app.get('/login', function(req, res) {
//   res.render('login');
// });

// app.get('/register', function(req, res) {
//   res.render('register');
// });

// app.get('/about', function(req, res) {
//   res.render('home');
// });


app.get('/', function(req, res) {
  res.render('index');
});
app.get('/partials/:name', function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
});

app.get('*', function(req, res) {
  res.redirect('/');
});


let port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("server running on port " + port);
});


