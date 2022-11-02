import Integer from '../../../types/Integer';

export default class BuyValue extends Integer {
  static create(value: number): BuyValue {
    const buyValue = new BuyValue(value);

    buyValue.validate();

    return buyValue;
  }
}
