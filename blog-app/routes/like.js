const express = require('express');
const LikeController = require('../controllers/like');

const router = express.Router();

router.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/html');
  next();
});

router.get('/likes', LikeController.getAllLikes);
router.get('/likes/:likeId', LikeController.getLikeById);
router.post('/likes', LikeController.addLike);
router.put('/likes/:likeId', LikeController.updateLike);
router.delete('/likes/:likeId', LikeController.deleteLike);

module.exports = router;
