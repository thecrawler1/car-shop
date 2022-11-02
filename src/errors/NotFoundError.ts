import HttpError from './HttpError';

export default class NotFoundError extends HttpError {
  static readonly STATUS_CODE = 404;

  constructor() {
    super(NotFoundError.STATUS_CODE, 'Object not found');

    this.name = 'NotFoundError';
  }
}
