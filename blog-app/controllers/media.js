// controllers/mediaController.js
const multer = require('multer');
const path = require('path');
const MediaService = require('../services/mediaService');

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

class MediaController {
  static async getAllMedia(req, res) {
    try {
      const media = await MediaService.getAllMedia();
      res.json(media);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async getMediaById(req, res) {
    try {
      const { mediaId } = req.params;
      const media = await MediaService.getMediaById(mediaId);
      if (media) {
        res.json(media);
      } else {
        res.status(404).json({ error: 'Media not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async addMedia(req, res) {
    try {
      const { postId } = req.body;
      const mediaUrl = req.file ? req.file.filename : null;
      const newMedia = await MediaService.addMedia(postId, mediaUrl);
      res.status(201).json(newMedia);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async updateMedia(req, res) {
    try {
      const { mediaId } = req.params;
      const mediaUrl = req.file ? req.file.filename : null;
      const updatedMedia = await MediaService.updateMedia(mediaId, mediaUrl);
      if (updatedMedia) {
        res.json(updatedMedia);
      } else {
        res.status(404).json({ error: 'Media not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async deleteMedia(req, res) {
    try {
      const { mediaId } = req.params;
      const deletedMedia = await MediaService.deleteMedia(mediaId);
      if (deletedMedia) {
        res.json(deletedMedia);
      } else {
        res.status(404).json({ error: 'Media not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = MediaController;
