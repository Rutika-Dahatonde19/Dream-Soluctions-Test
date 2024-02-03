const bcrypt = require('bcrypt');
const SessionService = require('../services/session');

class SessionController {
  static async createSession(req, res) {
    try {
      const { user_id, username, password } = req.body;
      // Hashing password using bcrypt
      const hashedPassword = await bcrypt.hash(password, 10);

      const session = await SessionService.createSession({
        user_id,
        username,
        password: hashedPassword,
      });
      res.json(session);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async updateLogoutTime(req, res) {
    try {
      const { sessionId } = req.params;
      const updatedSession = await SessionService.updateLogoutTime(sessionId);
      res.json(updatedSession);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = SessionController;
