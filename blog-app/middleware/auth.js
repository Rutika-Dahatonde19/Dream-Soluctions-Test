const jwtUtils = require('../config/jwt');

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const decodedToken = jwtUtils.verifyToken(token.replace('Bearer ', ''));

  if (!decodedToken) {
    return res.status(401).json({ error: 'Invalid token' });
  }

  req.user = decodedToken;
  next();
};

module.exports = authMiddleware;
