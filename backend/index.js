const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

const selectAllUsers = "SELECT * from users";
const selectAllFeed = "SELECT * from racers";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "f1"
});

connection.connect(err => {
  if (err) {
    return err;
  }
});

app.use(cors());

app.get("/", (req, res) => {
  //Standard url: localhost:4000
  res.send("go to /users to see my users or to /racers to see all racers");
});

app.get("/users", (req, res) => {
  // url: localhost:4000/users
  connection.query(selectAllUsers, (err, results) => {
    //Abfrage starten
    if (err) {
      return err;
    } else {
      return res.json({
        data: results
      });
    }
  });
});

app.get("/racers", (req, res) => {
  // url: localhost:4000/racers
  connection.query(selectAllRacers, (err, results) => {
    //Abfrage starten
    if (err) {
      return err;
    } else {
      return res.json({
        data: results
      });
    }
  });
});

app.listen(4000, () => {
  console.log("MyFirstDB server listening on port 4000");
});
