// models/usersProfileModel.js
const db = require('../config/dbconfig');

class UsersProfile {
  static async getAllProfiles() {
    const result = await db.query('SELECT * FROM public.users_profile');
    return result.rows;
  }

  static async addProfile(profileData) {
    const { full_name, bio, profile_image_url, users_id } = profileData;
    const result = await db.query(
      'INSERT INTO public.users_profile (full_name, bio, profile_image_url, users_id) VALUES ($1, $2, $3, $4) RETURNING *',
      [full_name, bio, profile_image_url, users_id]
    );
    return result.rows[0];
  }

  // Implement update, delete, and getProfileById methods similarly
}

module.exports = UsersProfile;
