import User from '../models/User.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, UnAuthenticatedError } from '../errors/index.js';
import { attachCookie, getRandomAva } from '../utils/index.js';

export const signup = async (req, res) => {
  const { username, password, confirmPassword, gender } = req.body;

  const usernameAlreadyExists = await User.findOne({ username });
  if (usernameAlreadyExists) {
    throw new BadRequestError('Username already exists');
  }

  const passwordsMatch = password === confirmPassword;
  if (!passwordsMatch) {
    throw new BadRequestError('Passwords do not match');
  }

  const newUser = await User.create({ ...req.body, ava: getRandomAva(gender) });
  newUser.password = undefined;

  const token = newUser.createJWT();
  attachCookie({ res, token });

  res.status(StatusCodes.CREATED).json({
    success: true,
    message: 'Successfully created user',
    data: newUser,
  });
};

export const signin = async (req, res) => {
  const { username, password } = req.body;

  const userExists = await User.findOne({ username }).select('+password');
  if (!userExists) {
    throw new UnAuthenticatedError('Invalid credentials');
  }

  const passwordCorrect = await userExists.comparePasswords(password);
  if (!passwordCorrect) {
    throw new UnAuthenticatedError('Invalid credentials');
  }

  const token = userExists.createJWT();
  attachCookie({ res, token });
  userExists.password = undefined;

  res.status(StatusCodes.OK).json({
    success: true,
    message: 'Successfully signed in',
    data: userExists,
  });
};

export const signout = (req, res) => {
  res.cookie('token', 'signout', {
    httpOnly: true,
    expires: new Date(Date.now() + 1000),
  });

  res
    .status(StatusCodes.OK)
    .json({ success: true, message: 'Successfully signed out' });
};
