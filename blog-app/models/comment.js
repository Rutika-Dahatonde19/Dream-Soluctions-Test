// models/commentModel.js
const pool = require('../config/dbconfig');

class CommentModel {
  static async getAllComments() {
    const query = 'SELECT * FROM Comments';
    const result = await pool.query(query);
    return result.rows;
  }

  static async getCommentById(commentId) {
    const query = 'SELECT * FROM Comments WHERE comment_id = $1';
    const result = await pool.query(query, [commentId]);
    return result.rows[0];
  }

  static async addComment(text, postId, userId) {
    const query = 'INSERT INTO Comments (text, post_id, user_id) VALUES ($1, $2, $3) RETURNING *';
    const result = await pool.query(query, [text, postId, userId]);
    return result.rows[0];
  }

  static async updateComment(commentId, newText) {
    const query = 'UPDATE Comments SET text = $1 WHERE comment_id = $2 RETURNING *';
    const result = await pool.query(query, [newText, commentId]);
    return result.rows[0];
  }

  static async deleteComment(commentId) {
    const query = 'DELETE FROM Comments WHERE comment_id = $1 RETURNING *';
    const result = await pool.query(query, [commentId]);
    return result.rows[0];
  }
}

module.exports = CommentModel;
