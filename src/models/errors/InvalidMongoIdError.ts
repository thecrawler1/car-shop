import BadRequestError from '../../errors/BadRequestError';

export default class InvalidMongoIdError extends BadRequestError {
  constructor() {
    super('Id must have 24 hexadecimal characters');

    this.name = 'InvalidMongoIdError';
  }
}
