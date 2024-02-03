// routes/usersProfileRoutes.js
const express = require('express');
const multer = require('multer');
const UsersProfileController = require('../controllers/userProfile');
const router = express.Router();
const upload = multer({ dest: 'uploads/' }); // Adjust the destination folder as needed

router.get('/profiles', UsersProfileController.getAllProfiles);

// Use multer middleware to handle file uploads
router.post('/profiles', upload.single('profile_image'), UsersProfileController.addProfile);

// Implement update, delete, and getProfileById routes similarly

module.exports = router;
