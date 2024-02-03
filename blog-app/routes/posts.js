const express = require('express');
const PostController = require('../controllers/posts');

const router = express.Router();

router.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/html');
  next();
});

router.get('/posts', PostController.getAllPosts);
router.get('/posts/:postId', PostController.getPostById);
router.post('/posts', PostController.addPost);
router.put('/posts/:postId', PostController.updatePost);
router.delete('/posts/:postId', PostController.deletePost);

module.exports = router;
