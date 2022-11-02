import InvalidIntegerError from './errors/InvalidIntegerError';
import InvalidRangeError from './errors/InvalidRangeError';
import BaseType from './BaseType';

export default abstract class Integer extends BaseType<number> {
  protected readonly MIN_VALUE = Number.MIN_VALUE;
  protected readonly MAX_VALUE = Number.MAX_VALUE;

  protected override validate(): void {
    this.validateType();
    this.validateRange();
  }

  private validateType(): void {
    if (typeof this.value !== 'number' || !Number.isInteger(this.value)) {
      throw new InvalidIntegerError();
    }
  }

  private validateRange(): void {
    if (this.value < this.MIN_VALUE || this.value > this.MAX_VALUE) {
      throw new InvalidRangeError(this.MIN_VALUE, this.MAX_VALUE);
    }
  }
}
