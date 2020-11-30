require('dotenv').config()
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);


app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
