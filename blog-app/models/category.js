const pool = require('../config/dbconfig');

class Category {
  static async getAllCategories() {
    const query = 'SELECT * FROM Categories';
    const result = await pool.query(query);
    return result.rows;
  }

  static async getCategoryById(categoryId) {
    const query = 'SELECT * FROM Categories WHERE category_id = $1';
    const values = [categoryId];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async addCategory(name) {
    const query = 'INSERT INTO Categories (name) VALUES ($1) RETURNING *';
    const values = [name];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async updateCategory(categoryId, name) {
    const query = 'UPDATE Categories SET name = $1 WHERE category_id = $2 RETURNING *';
    const values = [name, categoryId];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async deleteCategory(categoryId) {
    const query = 'DELETE FROM Categories WHERE category_id = $1 RETURNING *';
    const values = [categoryId];
    const result = await pool.query(query, values);
    return result.rows[0];
  }
}

module.exports = Category;
