import String from '../../../types/String';

export default class Id extends String {
  static create(value: string): Id {
    const id = new Id(value);

    id.validate();

    return id;
  }
}
