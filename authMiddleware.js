const jwt = require('jsonwebtoken');
const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  next();
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    console.log('yes');
    try {
      const token = authHeader.split(' ')[1];
      console.log(token);
      if (!token) {
        res.status(401).json({ msg: 'You are not authorized' });
      }
      const decoded = jwt.verify(token, process.env.SECRET);

      req.user = decoded.id;

      next();
    } catch (error) {
      res.status(401).json({ msg: 'You are not authorized' });
    }
  } else {
    res.status(401).json({ msg: 'You are not authorized' });
  }
};
module.exports = { authMiddleware };
