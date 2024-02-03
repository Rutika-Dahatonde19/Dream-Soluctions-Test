const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const multer = require('multer');
const userRoutes = require('./routes/users');
const sessionRoutes = require('./routes/session');
const postRoutes = require('./routes/posts');
const categoryRoutes = require('./routes/category');
const postCategoryRoutes = require('./routes/postCategory');
const commentRoutes = require('./routes/comment');
const likeRoutes = require('./routes/like');
const mediaRoutes = require('./routes/media');
const MediaModel = require('./models/media'); // Make sure to import the MediaModel
const userProfileRoutes = require('./routes/userProfile');  // Import the new route


const path = require('path');

const app = express();

app.use(bodyParser.json());

// Configure multer for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Unique filename
  },
});

// ...

app.use('/api', userRoutes);
app.use('/api', sessionRoutes);
app.use('/api', postRoutes);
app.use('/api', categoryRoutes);
app.use('/api', postCategoryRoutes);
app.use('/api', commentRoutes);
app.use('/api', likeRoutes);
app.use('/api', mediaRoutes);
app.use('/uploads', express.static('uploads')); // Serve uploaded images statically
app.use('/api/users_profile', userProfileRoutes);  // Use the new route
app.use(express.static('public'));


// ...

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    // Check if the file is an image
    if (!file.mimetype.startsWith('image/')) {
      return cb(new Error('Only image files are allowed'), false);
    }
    cb(null, true);
  },
});

// ...

app.post('/api/upload', upload.single('mediaFile'), async (req, res) => {
  try {
    const { postId, mediaUrl } = req.body;
    const mediaFile = req.file;

    // Check if 'req.file' is defined
    if (!mediaFile) {
      throw new Error('No file received');
    }

    const newMedia = await MediaModel.addMedia(postId, mediaFile.filename);
    res.status(201).json(newMedia);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

// Serve login/registration page statically
app.use(express.static(path.join(__dirname, 'food recipe')));

// Route for the login/registration page
app.get('/login_registration', (req, res) => {
  res.sendFile(path.join(__dirname, 'food recipe', 'index.html'));
});

// Catch-all route to serve index.html for unmatched routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'food recipe', 'index.html'));
});

app.get('/favicon.ico', (req, res) => {
  res.status(204);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
