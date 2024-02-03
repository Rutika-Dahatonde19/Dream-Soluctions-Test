const pool = require('../config/dbconfig');

class Post {
  static async getAllPosts() {
    const query = 'SELECT * FROM Posts';
    const result = await pool.query(query);
    return result.rows;
  }

  static async getPostById(postId) {
    const query = 'SELECT * FROM Posts WHERE post_id = $1';
    const values = [postId];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async addPost({ title, content, user_id }) {
    const query = 'INSERT INTO Posts (title, content, user_id) VALUES ($1, $2, $3) RETURNING *';
    const values = [title, content, user_id];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async updatePost(postId, { title, content }) {
    const query = 'UPDATE Posts SET title = $1, content = $2 WHERE post_id = $3 RETURNING *';
    const values = [title, content, postId];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async deletePost(postId) {
    const query = 'DELETE FROM Posts WHERE post_id = $1 RETURNING *';
    const values = [postId];
    const result = await pool.query(query, values);
    return result.rows[0];
  }
}

module.exports = Post;
