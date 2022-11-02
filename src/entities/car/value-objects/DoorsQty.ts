import Integer from '../../../types/Integer';

export default class DoorsQty extends Integer {
  protected override readonly MIN_VALUE = 2;
  protected override readonly MAX_VALUE = 4;

  static create(value: number): DoorsQty {
    const doorsQty = new DoorsQty(value);

    doorsQty.validate();

    return doorsQty;
  }
}
