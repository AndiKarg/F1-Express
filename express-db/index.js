const cors = require("cors");
const express = require("express");
const mysql = require("mysql");

const app = express();

app.use(cors());

const selectAllRacers = "SELECT * from racers";
const selectAllUsers = "SELECT * from users";

const connection = mysql.createConnection({
    host: "192.168.49.79",
    user: "root",
    password: "akarg123",
    database: "f1" //noch erstellen
});

connection.connect(err => {
    if (err) throw err;
    console.log("Connected to the database");
});

app.get("/", (req, res) => {
    res.send("Willkommen auf meinem eigenen Webserver");
});

app.get("/users", (req, res) => {
    connection.query(selectAllUsers, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.get("/racers", (req, res) => {
    connection.query(selectAllRacers, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.listen(4000, () => {
    console.log("DB-Server for F1 listening on port 4000!");
});