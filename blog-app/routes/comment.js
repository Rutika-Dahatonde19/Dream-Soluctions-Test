const express = require('express');
const CommentController = require('../controllers/comment');

const router = express.Router();

router.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/html');
  next();
});

router.get('/comments', CommentController.getAllComments);
router.get('/comments/:commentId', CommentController.getCommentById);
router.post('/comments', CommentController.addComment);
router.put('/comments/:commentId', CommentController.updateComment);
router.delete('/comments/:commentId', CommentController.deleteComment);

module.exports = router;
