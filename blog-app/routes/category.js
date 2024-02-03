const express = require('express');
const CategoryController = require('../controllers/category');

const router = express.Router();

router.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/html');
  next();
});

router.get('/categories', CategoryController.getAllCategories);
router.get('/categories/:categoryId', CategoryController.getCategoryById);
router.post('/categories', CategoryController.addCategory);
router.put('/categories/:categoryId', CategoryController.updateCategory);
router.delete('/categories/:categoryId', CategoryController.deleteCategory);

module.exports = router;
