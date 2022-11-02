import BadRequestError from '../../errors/BadRequestError';

export default class InvalidIntegerError extends BadRequestError {
  constructor() {
    super('Invalid integer!');

    this.name = 'InvalidIntegerError';
  }
}
