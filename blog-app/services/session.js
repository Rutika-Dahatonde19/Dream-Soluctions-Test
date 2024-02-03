const SessionModel = require('../models/session');
const jwt = require('jsonwebtoken');
require('dotenv').config();

class SessionService {
  static async createSession({ user_id, username, password }) {
    const token = jwt.sign({ user_id, username }, process.env.JWT_SECRET, {
        expiresIn: '1h', 
      });
    
    const session = await SessionModel.createSession({
      user_id,
      username,
      password,
      token,
    });
    return session;
  }

  static async updateLogoutTime(sessionId) {
    const updatedSession = await SessionModel.updateLogoutTime(sessionId);
    return updatedSession;
  }
}

module.exports = SessionService;
