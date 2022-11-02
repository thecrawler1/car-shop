import Motorcycle from '../entities/motorcycle/Motorcycle';
import IController from '../interfaces/IController';
import ICreateMotorcycleService from '../interfaces/ICreateMotorcycleService';
import IRequest from '../interfaces/IRequest';
import IResponse from '../interfaces/IResponse';
import RequiredFieldsAreMissingError from './errors/RequiredFieldsAreMissingError';
import { created } from './helpers/httpResponses';

export default class CreateMotorcycleController implements IController {
  constructor(private readonly createMotorcycleService: ICreateMotorcycleService) {}

  async handle(request: IRequest): Promise<IResponse> {
    CreateMotorcycleController.validateRequest(request);

    const motorcycle: Motorcycle = await this.createMotorcycleService
      .perform(new Motorcycle(request.payload));

    return created(motorcycle.toDTO());
  }

  private static validateRequest(request: IRequest) {
    const fields = Object.keys(request.payload);
    const required = ['model', 'year', 'color', 'buyValue', 'category', 'engineCapacity'];

    const someIsMissing = required.some((field) => !fields.includes(field));

    if (someIsMissing) throw new RequiredFieldsAreMissingError();
  }
}
