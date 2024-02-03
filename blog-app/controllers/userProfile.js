// controllers/usersProfileController.js
const UsersProfileService = require('../services/userProfile'); // Assuming your service file is named userProfile.js
const db = require('../config/dbconfig');

class UsersProfileController {
  static async getAllProfiles(req, res) {
    try {
      const profiles = await UsersProfileService.getAllProfiles();
      res.json(profiles);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async addProfile(req, res) {
    try {
      console.log('req.body:', req.body);
      console.log('req.file:', req.file);

      // Assuming image file is uploaded using multer and available in req.file
      const profile_image_url = req.file ? req.file.path : null;

      // Extract other data from the request body
      const { full_name, bio } = req.body;

      // Query to get users_id based on user information
      const userQuery = await db.query('SELECT user_id FROM public.users WHERE full_name = $1 AND bio = $2', [full_name, bio]);
      const users_id = userQuery.rows[0]?.user_id;

      if (!users_id) {
        return res.status(404).json({ error: 'User not found' });
      }

      const profileData = { full_name, bio, profile_image_url, users_id };
      const newProfile = await UsersProfileService.addProfile(profileData);

      res.status(201).json(newProfile);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // Implement update, delete, and getProfileById methods similarly
}

module.exports = UsersProfileController;
