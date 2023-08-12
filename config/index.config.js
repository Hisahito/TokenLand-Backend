require('dotenv').config();

let config;

if (process.env.NODE_ENV === 'prod') {
  config = {
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBNAME,
    dbPort: process.env.DBPORT || 3306,
    port: process.env.PORT_PROD,
  };
} else {
  config = {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    dbPort: process.env.DATABASE_PORT || 3306,
    port: process.env.PORT_LOCAL,
  };
}

module.exports = config;