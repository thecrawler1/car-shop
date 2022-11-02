import String from '../../../types/String';

export default class Model extends String {
  protected override readonly MIN_LEN = 3;

  static create(value: string): Model {
    const model = new Model(value);

    model.validate();

    return model;
  }
}
