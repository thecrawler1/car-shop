import BadRequestError from '../../errors/BadRequestError';

export default class RequiredFieldsAreMissingError extends BadRequestError {
  constructor() {
    super('Required fields are missing!');

    this.name = 'RequiredFieldsAreMissingError';
  }
}
