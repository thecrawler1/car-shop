import BadRequestError from '../../errors/BadRequestError';

export default class InvalidStringLengthError extends BadRequestError {
  constructor(minValue: number, maxValue: number) {
    super(`The string length should be between ${minValue} and ${maxValue}.`);

    this.name = 'InvalidStringLengthError';
  }
}
