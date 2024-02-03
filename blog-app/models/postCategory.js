const pool = require('../config/dbconfig');

class PostCategory {
  static async getAllPostCategories() {
    const query = 'SELECT * FROM PostCategories';
    const result = await pool.query(query);
    return result.rows;
  }

  static async getPostCategoryByPostId(postId) {
    const query = 'SELECT * FROM PostCategories WHERE post_id = $1';
    const values = [postId];
    const result = await pool.query(query, values);
    return result.rows;
  }

  static async getPostCategoryByCategoryId(categoryId) {
    const query = 'SELECT * FROM PostCategories WHERE category_id = $1';
    const values = [categoryId];
    const result = await pool.query(query, values);
    return result.rows;
  }

  static async addPostCategory(postId, categoryId) {
    const query = 'INSERT INTO PostCategories (post_id, category_id) VALUES ($1, $2) RETURNING *';
    const values = [postId, categoryId];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async deletePostCategory(postId, categoryId) {
    const query = 'DELETE FROM PostCategories WHERE post_id = $1 AND category_id = $2 RETURNING *';
    const values = [postId, categoryId];
    const result = await pool.query(query, values);
    return result.rows[0];
  }
}

module.exports = PostCategory;
