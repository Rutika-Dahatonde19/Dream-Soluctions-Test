// controllers/commentController.js
const CommentService = require('../services/comment');

class CommentController {
  static async getAllComments(req, res) {
    try {
      const comments = await CommentService.getAllComments();
      res.json(comments);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async getCommentById(req, res) {
    try {
      const { commentId } = req.params;
      const comment = await CommentService.getCommentById(commentId);
      if (comment) {
        res.json(comment);
      } else {
        res.status(404).json({ error: 'Comment not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async addComment(req, res) {
    try {
      const { text, postId, userId } = req.body;
      const newComment = await CommentService.addComment(text, postId, userId);
      res.status(201).json(newComment);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async updateComment(req, res) {
    try {
      const { commentId } = req.params;
      const { text } = req.body;
      const updatedComment = await CommentService.updateComment(commentId, text);
      if (updatedComment) {
        res.json(updatedComment);
      } else {
        res.status(404).json({ error: 'Comment not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async deleteComment(req, res) {
    try {
      const { commentId } = req.params;
      const deletedComment = await CommentService.deleteComment(commentId);
      if (deletedComment) {
        res.json(deletedComment);
      } else {
        res.status(404).json({ error: 'Comment not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = CommentController;
