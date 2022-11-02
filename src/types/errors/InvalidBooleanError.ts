import BadRequestError from '../../errors/BadRequestError';

export default class InvalidBooleanError extends BadRequestError {
  constructor() {
    super('Invalid boolean!');

    this.name = 'InvalidBooleanError';
  }
}
