const express = require('express');
const PostCategoryController = require('../controllers/postCategory');

const router = express.Router();

router.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/html');
  next();
});

router.get('/postcategories', PostCategoryController.getAllPostCategories);
router.get('/postcategories/post/:postId', PostCategoryController.getPostCategoriesByPostId);
router.get('/postcategories/category/:categoryId', PostCategoryController.getPostCategoriesByCategoryId);
router.post('/postcategories', PostCategoryController.addPostCategory);
router.delete('/postcategories', PostCategoryController.deletePostCategory);

module.exports = router;
