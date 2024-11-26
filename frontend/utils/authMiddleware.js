// Import the jsonwebtoken module
const jwt = require('jsonwebtoken');
// Secret key for signing the JWT. Default to 'mysecretsshhhhh' if not provided in environment variables
const JWT_SECRET = process.env.JWT_SECRET || 'mysecretsshhhhh';

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Attach user info (id, email) to request object
    next();
  } catch (error) {
    res.status(403).json({ message: 'Invalid or expired token' });
  }
};

module.exports = authMiddleware;
