const UserService = require('../services/users');

class UserController {
  static async createUser(req, res) {
    try {
      const { username, mobile_number, email, password } = req.body;
      const user = await UserService.createUser({
        username,
        mobile_number,
        email,
        password,
      });
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = UserController;
