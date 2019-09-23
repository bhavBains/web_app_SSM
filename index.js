const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const keys = require("./config/keys");

//Initialize app
const app = express();

//Database Connection
mongoose.connect(
  keys.mongoURI,
  { useUnifiedTopology: true },
  { useNewUrlParser: true }
);

//Middleware use of body-parser
app.use(bodyParser.json());

//Routes
require("./routes/api/employees")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`server is up and running on ${PORT}`));
