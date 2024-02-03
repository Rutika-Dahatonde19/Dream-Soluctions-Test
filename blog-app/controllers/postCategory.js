const PostCategoryService = require('../services/postCategory');

class PostCategoryController {
  static async getAllPostCategories(req, res) {
    try {
      const postCategories = await PostCategoryService.getAllPostCategories();
      res.json(postCategories);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async getPostCategoriesByPostId(req, res) {
    try {
      const { postId } = req.params;
      const postCategories = await PostCategoryService.getPostCategoriesByPostId(postId);
      res.json(postCategories);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async getPostCategoriesByCategoryId(req, res) {
    try {
      const { categoryId } = req.params;
      const postCategories = await PostCategoryService.getPostCategoriesByCategoryId(categoryId);
      res.json(postCategories);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async addPostCategory(req, res) {
    try {
      const { postId, categoryId } = req.body;

      // Validate request parameters
      if (!postId || !categoryId) {
        return res.status(400).json({ error: 'Invalid request parameters' });
      }

      const postCategory = await PostCategoryService.addPostCategory(postId, categoryId);
      res.status(201).json(postCategory);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async deletePostCategory(req, res) {
    try {
      const { postId, categoryId } = req.body;

      // Validate request parameters
      if (!postId || !categoryId) {
        return res.status(400).json({ error: 'Invalid request parameters' });
      }

      const deletedPostCategory = await PostCategoryService.deletePostCategory(postId, categoryId);
      if (deletedPostCategory) {
        res.json(deletedPostCategory);
      } else {
        res.status(404).json({ error: 'PostCategory not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = PostCategoryController;
