// import { Pool } from 'pg';
// import { POSTGRES_HOST, POSTGRES_PORT, POSTGRES_USER, POSTGRES_PASSWORD, DATABASE } from '../config';

let { Pool } = require('pg');

let { POSTGRES_HOST, POSTGRES_PORT, POSTGRES_USER, POSTGRES_PASSWORD, DATABASE } = require('../environment/env.config');

/** Create db Pool:-
 */

const pool = new Pool({
  host: POSTGRES_HOST,
  database: DATABASE,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  port: parseInt(POSTGRES_PORT, 10),
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
