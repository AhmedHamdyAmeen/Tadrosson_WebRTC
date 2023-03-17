let mysql,
  { createPool } = require('mysql2/promise');

let { MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PASSWORD, DATABASE } = require('../environment/env.config');

/** Create db Pool:-
 */

const pool = createPool({
  host: MYSQL_HOST,
  database: DATABASE,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  port: parseInt(MYSQL_PORT, 10),
  connectionLimit: 10,
});

pool.on('connection', (stream) => {
  //   console.log(`Someone Connected to the Database Successfully, Stream: `, stream);
  console.log(`Someone Connected to the Database Successfully`);
});
/** Listen on the Error:
 */
pool.on('error', (err) => {
  console.log(err.message);
});

// export default pool;
module.exports = pool;

/**
 * * Connection String:-
 * const DatabaseConnectionString = `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.DATABASE}`;
 */
