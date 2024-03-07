import express from 'express';
import rateLimiter from 'express-rate-limit';

import { signup, signin, signout } from '../controllers/authControllers.js';

const router = express.Router();

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 7,
  message: 'Too many signup/signin attempts, please try again after 15 minutes',
});

router.post('/signup', apiLimiter, signup);
router.post('/signin', apiLimiter, signin);
router.post('/signout', signout);

export default router;
