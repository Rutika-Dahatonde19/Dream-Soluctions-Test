const pool = require('../config/dbconfig');

class User {
  static async createUser({ username, mobile_number, email, password }) {
    const query = 'INSERT INTO Users (username, mobile_number, email, password) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [username, mobile_number, email, password];
    const result = await pool.query(query, values);
    return result.rows[0];
  }
}

module.exports = User;
