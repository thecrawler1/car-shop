import String from '../../../types/String';

export default class Color extends String {
  protected override readonly MIN_LEN = 3;

  static create(value: string): Color {
    const color = new Color(value);

    color.validate();

    return color;
  }
}
