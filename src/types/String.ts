import InvalidStringError from './errors/InvalidStringError';
import InvalidStringLengthError from './errors/InvalidStringLengthError';
import BaseType from './BaseType';

export default abstract class String extends BaseType<string> {
  protected readonly MIN_LEN: number = 0;
  protected readonly MAX_LEN = 100;

  protected override validate(): void {
    this.validateType();
    this.validateLength();
  }

  private validateType(): void {
    if (typeof this.value !== 'string') {
      throw new InvalidStringError();
    }
  }

  private validateLength(): void {
    if (this.value.length < this.MIN_LEN || this.value.length > this.MAX_LEN) {
      throw new InvalidStringLengthError(this.MIN_LEN, this.MAX_LEN);
    }
  }
}
