import { NotFoundError } from '../errors';

const notFoundMiddleware = (req, res) => {
  throw new NotFoundError('Route does not exist');
};

export default notFoundMiddleware;
