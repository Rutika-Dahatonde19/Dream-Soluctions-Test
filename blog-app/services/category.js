const CategoryModel = require('../models/category');

class CategoryService {
  static async getAllCategories() {
    return CategoryModel.getAllCategories();
  }

  static async getCategoryById(categoryId) {
    return CategoryModel.getCategoryById(categoryId);
  }

  static async addCategory(name) {
    return CategoryModel.addCategory(name);
  }

  static async updateCategory(categoryId, name) {
    return CategoryModel.updateCategory(categoryId, name);
  }

  static async deleteCategory(categoryId) {
    return CategoryModel.deleteCategory(categoryId);
  }
}

module.exports = CategoryService;
