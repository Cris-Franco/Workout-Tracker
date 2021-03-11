require("dotenv").config();

// Dependencies
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

// Express App
const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// DB Mongo connection
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Run server
app.listen(PORT, function () {
  console.log(`App listening on Port ${PORT}!`);
});
