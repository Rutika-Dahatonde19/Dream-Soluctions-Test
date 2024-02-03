// services/usersProfileService.js
const UsersProfile = require('../models/userProfile');

class UsersProfileService {
  static async getAllProfiles() {
    return await UsersProfile.getAllProfiles();
  }

  static async addProfile(profileData) {
    return await UsersProfile.addProfile(profileData);
  }

  // Implement update, delete, and getProfileById methods similarly
}

module.exports = UsersProfileService;
