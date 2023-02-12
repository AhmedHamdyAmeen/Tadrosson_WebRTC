const db = require('../config/database/database');

class UserModel {
    async createUser(email, user_name, first_name, last_name, hashedPassword) {
        // Open connection with db
        const connection = await db.connect();
        // run query
        const sql = `INSERT INTO users (email, user_name, first_name, last_name, password) VALUES ( $1, $2, $3, $4, $5) RETURNING id, email, password`;
        const result = await connection.query(sql, [email, user_name, first_name, last_name, hashedPassword]);

        // Release connection
        connection.release();
        return result.rows[0];
    }

    async findUserBy(column, value) {
        // Open connection with db
        const connection = await db.connect();
        // run query
        const sql = `SELECT * FROM users WHERE ${column}=$1`;
        const result = await connection.query(sql, [value]);

        // Release connection
        connection.release();
        return result.rows[0];
    }
}

module.exports = UserModel;
