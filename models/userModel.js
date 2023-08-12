const db = require('../database/conection.db');


class User {
    static handleDBError(error) {
        if (error.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('La conexión de la base de datos se cerró.');
        }
        if (error.code === 'ER_CON_COUNT_ERROR') {
            console.error('La base de datos tiene demasiadas conexiones.');
        }
        if (error.code === 'ECONNREFUSED') {
            console.error('La conexión de la base de datos fue rechazada.');
        }
    }

    // Proteger contra inyecciones SQL utilizando consultas preparadas
    static createUser = (username, password, email, phone_number) => {
       return new Promise((resolve, reject) => {
        const query = 'INSERT INTO users (username, password, email, phone_number) VALUES (?, ?, ?, ?)';
        db.query(query, [username, password, email, phone_number], (error, result) => {
            if (error) {
                this.handleDBError(error);
                reject(error);
            }
            resolve(result);
        }
        );
         });
    }

}

module.exports = User;
