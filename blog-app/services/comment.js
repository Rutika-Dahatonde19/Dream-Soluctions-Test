// services/commentService.js
const CommentModel = require('../models/comment');

class CommentService {
  static async getAllComments() {
    return CommentModel.getAllComments();
  }

  static async getCommentById(commentId) {
    return CommentModel.getCommentById(commentId);
  }

  static async addComment(text, postId, userId) {
    return CommentModel.addComment(text, postId, userId);
  }

  static async updateComment(commentId, newText) {
    return CommentModel.updateComment(commentId, newText);
  }

  static async deleteComment(commentId) {
    return CommentModel.deleteComment(commentId);
  }
}

module.exports = CommentService;
