const pool = require('../config/dbconfig');

class Session {
  static async createSession({ user_id, username, password, token }) {
    const query =
      'INSERT INTO Sessions (user_id, username, password, token) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [user_id, username, password, token];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async updateLogoutTime(sessionId) {
    const query =
      'UPDATE Sessions SET logout_time = CURRENT_TIMESTAMP WHERE id = $1 RETURNING *';
    const values = [sessionId];
    const result = await pool.query(query, values);
    return result.rows[0];
  }
}

module.exports = Session;
