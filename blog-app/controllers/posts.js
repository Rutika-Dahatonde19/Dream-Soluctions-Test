const PostService = require('../services/posts');

class PostController {
  static async getAllPosts(req, res) {
    try {
      const posts = await PostService.getAllPosts();
      res.json(posts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async getPostById(req, res) {
    try {
      const { postId } = req.params;
      const post = await PostService.getPostById(postId);
      if (post) {
        res.json(post);
      } else {
        res.status(404).json({ error: 'Post not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async addPost(req, res) {
    try {
      const { title, content, user_id } = req.body;
      const post = await PostService.addPost({ title, content, user_id });
      res.json(post);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async updatePost(req, res) {
    try {
      const { postId } = req.params;
      const { title, content } = req.body;
      const updatedPost = await PostService.updatePost(postId, { title, content });
      if (updatedPost) {
        res.json(updatedPost);
      } else {
        res.status(404).json({ error: 'Post not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async deletePost(req, res) {
    try {
      const { postId } = req.params;
      const deletedPost = await PostService.deletePost(postId);
      if (deletedPost) {
        res.json(deletedPost);
      } else {
        res.status(404).json({ error: 'Post not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = PostController;
