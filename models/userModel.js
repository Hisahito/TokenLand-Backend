const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'token_land'
});

// Proteger contra inyecciones SQL utilizando consultas preparadas
exports.createUser = (username, password, email, phoneNumber) => {
    return db.promise().execute(
        'INSERT INTO users (username, password, email, phone_number) VALUES (?, ?, ?, ?)',
        [username, password, email, phoneNumber]
    );
};

// Otras funciones relacionadas con usuarios irían aquí
