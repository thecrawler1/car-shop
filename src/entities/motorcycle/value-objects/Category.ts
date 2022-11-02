import String from '../../../types/String';
import InvalidCategoryError from './errors/InvalidCategoryError';

export default class Category extends String {
  static create(value: string): Category {
    const category = new Category(value);

    category.validate();

    return category;
  }

  protected override validate(): void {
    super.validate();

    if (!['Street', 'Custom', 'Trail'].includes(this.value)) {
      throw new InvalidCategoryError();
    }
  }
}
