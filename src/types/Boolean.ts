import BaseType from './BaseType';
import InvalidBooleanError from './errors/InvalidBooleanError';

export default abstract class Boolean extends BaseType<boolean> {
  protected validate(): void {
    if (typeof this.value !== 'boolean') {
      throw new InvalidBooleanError();
    }
  }
}
