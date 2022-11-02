import { categoryType } from '../../../interfaces/IMotorcycle';
import BaseType from '../../../types/BaseType';
import InvalidCategoryError from './errors/InvalidCategoryError';

export default class Category extends BaseType<categoryType> {
  static create(value: categoryType): Category {
    const category = new Category(value);

    category.validate();

    return category;
  }

  protected override validate(): void {
    if (!['Street', 'Custom', 'Trail'].includes(this.value)) {
      throw new InvalidCategoryError();
    }
  }
}
