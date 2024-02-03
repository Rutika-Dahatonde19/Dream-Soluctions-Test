
const LikeModel = require('../models/like');

class LikeService {
  static async getAllLikes() {
    return LikeModel.getAllLikes();
  }

  static async getLikeById(likeId) {
    return LikeModel.getLikeById(likeId);
  }

  static async addLike(postId, userId, isLike) {
    return LikeModel.addLike(postId, userId, isLike);
  }

  static async updateLike(likeId, isLike) {
    return LikeModel.updateLike(likeId, isLike);
  }

  static async deleteLike(likeId) {
    return LikeModel.deleteLike(likeId);
  }
}

module.exports = LikeService;
