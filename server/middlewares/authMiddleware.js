import jwt from 'jsonwebtoken';
import { UnAuthenticatedError } from '../errors/index.js';

const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  
  if (!token) {
    throw new UnAuthenticatedError('Authentication invalid');
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.userId };
    next();
  } catch (error) {
    // console.log(error)
    throw new UnAuthenticatedError('Authentication invalid');
  }
};

export default authMiddleware;