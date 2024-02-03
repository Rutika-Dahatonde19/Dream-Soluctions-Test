const PostCategoryModel = require('../models/postCategory');

class PostCategoryService {
  static async getAllPostCategories() {
    return PostCategoryModel.getAllPostCategories();
  }

  static async getPostCategoryByPostId(postId) {
    return PostCategoryModel.getPostCategoryByPostId(postId);
  }

  static async getPostCategoryByCategoryId(categoryId) {
    return PostCategoryModel.getPostCategoryByCategoryId(categoryId);
  }

  static async addPostCategory(postId, categoryId) {
    return PostCategoryModel.addPostCategory(postId, categoryId);
  }

  static async deletePostCategory(postId, categoryId) {
    return PostCategoryModel.deletePostCategory(postId, categoryId);
  }
}

module.exports = PostCategoryService;
