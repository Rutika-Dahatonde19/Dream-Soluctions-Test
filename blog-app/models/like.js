
const pool = require('../config/dbconfig');

class LikeModel {
  static async getAllLikes() {
    const query = 'SELECT * FROM Likes';
    const result = await pool.query(query);
    return result.rows;
  }

  static async getLikeById(likeId) {
    const query = 'SELECT * FROM Likes WHERE like_id = $1';
    const result = await pool.query(query, [likeId]);
    return result.rows[0];
  }

  static async addLike(postId, userId, isLike) {
    const query = 'INSERT INTO Likes (post_id, user_id, is_like) VALUES ($1, $2, $3) RETURNING *';
    const result = await pool.query(query, [postId, userId, isLike]);
    return result.rows[0];
  }

  static async updateLike(likeId, isLike) {
    const query = 'UPDATE Likes SET is_like = $1 WHERE like_id = $2 RETURNING *';
    const result = await pool.query(query, [isLike, likeId]);
    return result.rows[0];
  }

  static async deleteLike(likeId) {
    const query = 'DELETE FROM Likes WHERE like_id = $1 RETURNING *';
    const result = await pool.query(query, [likeId]);
    return result.rows[0];
  }
}

module.exports = LikeModel;
