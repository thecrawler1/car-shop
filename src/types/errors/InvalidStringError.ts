import BadRequestError from '../../errors/BadRequestError';

export default class InvalidStringError extends BadRequestError {
  constructor() {
    super('Invalid string!');

    this.name = 'InvalidStringError';
  }
}
