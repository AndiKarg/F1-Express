const express = require("express");
const cors = require("cors");
//cors muss weg da nun auch aufruf von außen erlaubt ist... backend und frontend ins selbe paket dann ist nur aufruf innerhalb des Pakets erlaubt
const mysql = require("mysql2");
const conf = require("./conf").config;

const app = express();

const selectAllUsers = "SELECT * from users";

const connection = mysql.createConnection({
    host: "192.168.49.79",
    user: conf.user,
    password: conf.pass,
    database: conf.db
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

app.listen(4000, () => {
    console.log("MyFirstDB server listening on port 4000");
});