import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import 'express-async-errors';

import mongoSanitize from 'express-mongo-sanitize';
import cookieParser from 'cookie-parser';

import connectDB from './db/connect.js';

import {
  authMiddleware,
  errorMiddleware,
  notFoundMiddleware,
} from './middlewares/index.js';

import authRoutes from './routes/authRoutes.js';
import usersRoutes from './routes/usersRoutes.js';
import messagesRoutes from './routes/messagesRoutes.js';

import { app, server } from './socket/socket.js';

const port = process.env.PORT || 5000;

const __dirname = path.resolve(); // it give us the absolute path (the root folder)

dotenv.config();

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(mongoSanitize());
app.use(cookieParser());

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', authMiddleware, usersRoutes);
app.use('/api/v1/messages', authMiddleware, messagesRoutes);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    server.listen(port, () =>
      console.log(`Server is listening on port ${port}`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
