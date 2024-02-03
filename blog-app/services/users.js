const bcrypt = require('bcrypt');
const UserModel = require('../models/users');

class UserService {
  static async createUser({ username, mobile_number, email, password }) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserModel.createUser({
      username,
      mobile_number,
      email,
      password: hashedPassword,
    });
    return user;
  }
}

module.exports = UserService;
