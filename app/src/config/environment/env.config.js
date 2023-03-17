// import dotenv from 'dotenv';
// import { dotenv } from 'dotenv';
require('dotenv').config();

const {
    PORT,
    HOST,
    NODE_ENV,
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_DB,
    MYSQL_DB_test,
    MYSQL_USER,
    MYSQL_PASSWORD,
    BCRYPT_PASSWORD,
    BCRYPT_SALT,
    SESSION_SECRET_TOKEN,
} = process.env;

/** Select the appropriate DB base on the type NODE_ENV:
 */

const DATABASE = NODE_ENV === 'dev' ? MYSQL_DB : MYSQL_DB_test;

// export {
//     PORT,
//     HOST,
//     NODE_ENV,
//     MYSQL_HOST,
//     MYSQL_PORT,
//     MYSQL_USER,
//     MYSQL_PASSWORD,
//     DATABASE,
//     BCRYPT_PASSWORD,
//     BCRYPT_SALT,
//     SESSION_SECRET_TOKEN,
// };

module.exports = {
    PORT,
    HOST,
    NODE_ENV,
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_USER,
    MYSQL_PASSWORD,
    DATABASE,
    BCRYPT_PASSWORD,
    BCRYPT_SALT,
    SESSION_SECRET_TOKEN,
};
