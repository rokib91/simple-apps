const mysql = require("mysql");
require("dotenv").config();

// Connect database
const connection = mysql.createConnection({
  host: "db",
  user: "peserta",
  password: "password",
  database: "training"
});

module.exports = connection;
