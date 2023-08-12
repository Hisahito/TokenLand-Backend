require('dotenv').config();
const mysql = require('mysql2');
const config = require("../config/index");

// Configuración del pool de conexiones a la base de datos
const db = mysql.createPool({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database,
  port: config.dbPort,
  waitForConnections: true,
  connectionLimit: 20,
  queueLimit: 0
});

module.exports = db;