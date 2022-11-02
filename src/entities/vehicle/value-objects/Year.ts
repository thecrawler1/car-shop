import Integer from '../../../types/Integer';

export default class Year extends Integer {
  protected override readonly MIN_VALUE = 1900;
  protected override readonly MAX_VALUE = new Date().getFullYear();

  static create(value: number): Year {
    const year = new Year(value);

    year.validate();

    return year;
  }
}
