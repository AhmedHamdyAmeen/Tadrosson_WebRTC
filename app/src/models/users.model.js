const db = require('../config/database/database');

class UserModel {
  // async createUser(email, user_name, first_name, last_name, hashedPassword, role) {
  //   const sql = `INSERT INTO users (email, user_name, first_name, last_name, password, role) VALUES ( ?, ?, ?, ?, ?, ?)`;
  //   let data = [email, user_name, first_name, last_name, hashedPassword, role];

  //   db.getConnection(function (err, connection) {
  //     if (err) throw err;
  //     console.log('Database Connected. UserModel.createUser');

  //     // use the connection
  //     connection.query(sql, data, function (error, results, fields) {
  //       if (error) throw new Error(error);
  //       // handle the result of the query
  //       console.log(results);

  //       // Release the connection back to the pool
  //       connection.release();
  //       return results;
  //     });
  //   });
  // }

  async createUser(email, user_name, first_name, last_name, hashedPassword, role) {
    const sql = `INSERT INTO users (email, user_name, first_name, last_name, password, role) VALUES ( ?, ?, ?, ?, ?, ?)`;
    const data = [email, user_name, first_name, last_name, hashedPassword, role];

    let connection;
    try {
      connection = await db.getConnection();
      console.log('Database Connected. UserModel.createUser');

      const [results, fields] = await connection.query(sql, data);
      console.log(results);

      return results;
    } catch (error) {
      throw new Error(error);
    } finally {
      if (connection) {
        connection.release();
      }
    }
  }

  async findUserBy(column, value) {
    // Open connection with db
    /*
    db.getConnection(async (err, connection) => {
      if (err) {
        console.log('DB Connection Failed..', err);
        return;
      }

      console.log('Database Connected. UserModel.findUserBy');

      // run query
      const sql = `SELECT * FROM users WHERE ${column}= ?`;

      connection.query(sql, [value], (err, result) => {
        if (err) {
          console.error('Error Selecting data from the DB: ', err);
          return;
        }

        console.log('Data Retrieved successfully. Result:', result);
        connection.release();
        return result;
      });
    });
    */

    try {
      const connection = await db.getConnection();
      console.log('Database Connected. UserModel.findUserBy');

      const sql = `SELECT * FROM users WHERE ${column}= ?`;

      const [rows, fields] = await connection.execute(sql, [value]);
      console.log('Data Retrieved successfully. Result:', rows);

      connection.release();
      return rows[0];
    } catch (err) {
      console.error('Error Selecting data from the DB: ', err);
      return null;
    }
  }

  // End the Pool
  // db.end();
}

module.exports = UserModel;
