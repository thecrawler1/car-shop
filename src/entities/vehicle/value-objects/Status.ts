import Boolean from '../../../types/Boolean';

export default class Status extends Boolean {
  static create(value: boolean): Status {
    const status = new Status(value);

    status.validate();

    return status;
  }
}
