
const LikeService = require('../services/likeService'); // Corrected the import statement

class LikeController {
  static async getAllLikes(req, res) {
    try {
      const likes = await LikeService.getAllLikes();
      res.json(likes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async getLikeById(req, res) {
    try {
      const { likeId } = req.params;
      const like = await LikeService.getLikeById(likeId);
      if (like) {
        res.json(like);
      } else {
        res.status(404).json({ error: 'Like not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async addLike(req, res) {
    try {
      const { postId, userId, isLike } = req.body;
      const newLike = await LikeService.addLike(postId, userId, isLike);
      res.status(201).json(newLike);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async updateLike(req, res) {
    try {
      const { likeId } = req.params;
      const { isLike } = req.body;
      const updatedLike = await LikeService.updateLike(likeId, isLike);
      if (updatedLike) {
        res.json(updatedLike);
      } else {
        res.status(404).json({ error: 'Like not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async deleteLike(req, res) {
    try {
      const { likeId } = req.params;
      const deletedLike = await LikeService.deleteLike(likeId);
      if (deletedLike) {
        res.json(deletedLike);
      } else {
        res.status(404).json({ error: 'Like not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = LikeController;
