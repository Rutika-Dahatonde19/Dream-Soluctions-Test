const CategoryService = require('../services/category');

class CategoryController {
  static async getAllCategories(req, res) {
    try {
      const categories = await CategoryService.getAllCategories();
      res.json(categories);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async getCategoryById(req, res) {
    try {
      const { categoryId } = req.params;
      const category = await CategoryService.getCategoryById(categoryId);
      if (category) {
        res.json(category);
      } else {
        res.status(404).json({ error: 'Category not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async addCategory(req, res) {
    try {
      const { name } = req.body;
      const category = await CategoryService.addCategory(name);
      res.json(category);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async updateCategory(req, res) {
    try {
      const { categoryId } = req.params;
      const { name } = req.body;
      const updatedCategory = await CategoryService.updateCategory(categoryId, name);
      if (updatedCategory) {
        res.json(updatedCategory);
      } else {
        res.status(404).json({ error: 'Category not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async deleteCategory(req, res) {
    try {
      const { categoryId } = req.params;
      const deletedCategory = await CategoryService.deleteCategory(categoryId);
      if (deletedCategory) {
        res.json(deletedCategory);
      } else {
        res.status(404).json({ error: 'Category not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = CategoryController;
