import BadRequestError from '../../../../errors/BadRequestError';

export default class InvalidCategoryError extends BadRequestError {
  constructor() {
    super('Invalid category!');

    this.name = 'InvalidCategoryError';
  }
}
