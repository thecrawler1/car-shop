import Integer from '../../../types/Integer';

export default class SeatsQty extends Integer {
  protected override readonly MIN_VALUE = 2;
  protected override readonly MAX_VALUE = 7;

  static create(value: number): SeatsQty {
    const seatsQty = new SeatsQty(value);

    seatsQty.validate();

    return seatsQty;
  }
}
