const express = require('express');
const userRoutes = require('./routes/userRoutes');
const db = require('./database/conection.db');

const app = express();

// Middleware para leer JSON
app.use(express.json());

// Rutas
app.use('/api/v1/users', userRoutes);

// Conectar a la base de datos
db.getConnection((err, connection) => {
    if (err) {
      console.error("Something went wrong connecting to the database ...");
      if (err.code === "PROTOCOL_CONNECTION_LOST") {
        console.error("Database connection was closed.");
      }
      if (err.code === "ER_CON_COUNT_ERROR") {
        console.error("Database has too many connections.");
      }
      if (err.code === "ECONNREFUSED") {
        console.error("Database connection was refused.");
      }
    }
  
    if (connection) {
      connection.release();
      console.log("DB conectada con exito ...");
    }
  });

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
