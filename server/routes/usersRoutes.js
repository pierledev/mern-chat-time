import express from 'express';
import { getUsersToChat } from '../controllers/usersControllers.js';

const router = express.Router();

router.get('/', getUsersToChat);

export default router;