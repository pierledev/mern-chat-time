import { StatusCodes } from 'http-status-codes';

const errorMiddleware = (err, req, res, next) => {
  const defaultError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || 'Something went wrong, try again later',
  };

  res.status(defaultError.statusCode).json({ message: defaultError.message });
};

export default errorMiddleware;
