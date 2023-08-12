const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware para leer JSON
app.use(express.json());

// Rutas
app.use('/api/v1/users', userRoutes);

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
