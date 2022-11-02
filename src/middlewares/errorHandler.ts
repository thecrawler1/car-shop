import { ErrorRequestHandler } from 'express';

import HttpError from '../errors/HttpError';

const errorHandler: ErrorRequestHandler = async (error, _req, res, next) => {
  if (error instanceof HttpError) {
    res.status(error.statusCode).json({ error: error.message });
  } else {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

  next();
};

export default errorHandler;
