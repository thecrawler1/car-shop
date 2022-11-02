import Integer from '../../../types/Integer';

export default class EngineCapacity extends Integer {
  protected override readonly MIN_VALUE = 1;
  protected override readonly MAX_VALUE = 2500;

  static create(value: number): EngineCapacity {
    const engineCapacity = new EngineCapacity(value);

    engineCapacity.validate();

    return engineCapacity;
  }
}
