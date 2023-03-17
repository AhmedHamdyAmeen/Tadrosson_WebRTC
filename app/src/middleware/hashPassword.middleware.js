// import bcrypt from 'bcrypt';
// import { BCRYPT_PASSWORD, BCRYPT_SALT } from '../../config';

const bcrypt = require('bcrypt');

let { BCRYPT_PASSWORD, BCRYPT_SALT } = require('../config/environment/env.config');

/** Hash a Plaintext Password
 */
const hashPassword = (password) => {
  try {
    const salt = parseInt(BCRYPT_SALT, 10);
    return bcrypt.hashSync(`${password}${BCRYPT_PASSWORD}`, salt);
  } catch (error) {
    throw new Error(`Couldn't hash password: ${error.message}`);
  }
};

/** Compar plaintext password with hashed password
 */
const comparePasswords = (plainTextPassword, hashedPassword) => {
  console.log(plainTextPassword, hashedPassword);

  try {
    const isMatched = bcrypt.compareSync(`${plainTextPassword}${BCRYPT_PASSWORD}`, hashedPassword);
    return isMatched;
  } catch (error) {
    throw new Error(`Couldn't Compare the passwords, ${error.message}`);
  }
};

// export { hashPassword, comparePasswords };
module.exports = { hashPassword, comparePasswords };

/***
 *
 *  jwt.sign() ==> create token create token create token
 *    jwt.verify() ==> check the token..
 *
 *
 *
 */
