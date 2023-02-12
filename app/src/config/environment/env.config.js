// import dotenv from 'dotenv';
// import { dotenv } from 'dotenv';
require('dotenv').config();

const {
    PORT,
    HOST,
    NODE_ENV,
    POSTGRES_HOST,
    POSTGRES_PORT,
    POSTGRES_DB,
    POSTGRES_DB_test,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    BCRYPT_PASSWORD,
    BCRYPT_SALT,
    SESSION_SECRET_TOKEN,
} = process.env;

/** Select the appropriate DB base on the type NODE_ENV:
 */

const DATABASE = NODE_ENV === 'dev' ? POSTGRES_DB : POSTGRES_DB_test;

// export {
//     PORT,
//     HOST,
//     NODE_ENV,
//     POSTGRES_HOST,
//     POSTGRES_PORT,
//     POSTGRES_USER,
//     POSTGRES_PASSWORD,
//     DATABASE,
//     BCRYPT_PASSWORD,
//     BCRYPT_SALT,
//     SESSION_SECRET_TOKEN,
// };

module.exports = {
    PORT,
    HOST,
    NODE_ENV,
    POSTGRES_HOST,
    POSTGRES_PORT,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    DATABASE,
    BCRYPT_PASSWORD,
    BCRYPT_SALT,
    SESSION_SECRET_TOKEN,
};
