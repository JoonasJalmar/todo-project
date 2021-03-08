const cors = require("cors");
const express = require("express");
const app = express();
const db = require("./models/initModels");
const routes = require("./routes");

// Test
const whitelist = [
  "http://localhost:3000",
  "http://localhost:5000",
  "http://localhost:8080",
  "http://localhost:8081",
  "https://tamk-4a00ez62-3001-group25.herokuapp.com",
];
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin);
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable");
      callback(null, true);
    } else {
      console.log("Origin rejected");
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors(corsOptions));

// Creates a new MySql table according to models if not already made.
// Option { force: true } enables dropping existing tables for dev purposes.
db.sequelize.sync();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// test
app.use(express.static("client/build"));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Testing." });
});

routes(app);

/* if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static("client/build"));
} */

// set port, listen for requests
const PORT = process.env.PORT || "8080";
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
