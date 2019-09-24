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

//Heroku deployment env in Production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`server is up and running on ${PORT}`));
