import BadRequestError from '../../errors/BadRequestError';

export default class InvalidRangeError extends BadRequestError {
  constructor(minValue: number, maxValue: number) {
    super(`The number should be between ${minValue} and ${maxValue}.`);

    this.name = 'InvalidRangeError';
  }
}
