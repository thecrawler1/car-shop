export default abstract class BaseType<T> {
  protected readonly _value: T;

  protected constructor(value: T) {
    this._value = value;
  }

  protected abstract validate(): void;

  get value(): T {
    return this._value;
  }
}
