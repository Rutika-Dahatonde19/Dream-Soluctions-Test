const PostModel = require('../models/posts');

class PostService {
  static async getAllPosts() {
    return PostModel.getAllPosts();
  }

  static async getPostById(postId) {
    return PostModel.getPostById(postId);
  }

  static async addPost({ title, content, user_id }) {
    return PostModel.addPost({ title, content, user_id });
  }

  static async updatePost(postId, { title, content }) {
    return PostModel.updatePost(postId, { title, content });
  }

  static async deletePost(postId) {
    return PostModel.deletePost(postId);
  }
}

module.exports = PostService;
