import Motorcycle from '../entities/motorcycle/Motorcycle';
import IController from '../interfaces/IController';
import IRequest from '../interfaces/IRequest';
import IResponse from '../interfaces/IResponse';
import IUpdateMotorcycleService from '../interfaces/IUpdateMotorcycleService';
import RequiredFieldsAreMissingError from './errors/RequiredFieldsAreMissingError';
import { ok } from './helpers/httpResponses';

export default class UpdateMotorcycleController implements IController {
  constructor(private readonly updateMotorcycleService: IUpdateMotorcycleService) {}

  async handle(request: IRequest): Promise<IResponse> {
    UpdateMotorcycleController.validateRequest(request);

    const { id } = request.params;
    const motorcycle = new Motorcycle(request.payload);
    const updatedMotorcycle: Motorcycle = await this.updateMotorcycleService
      .perform(id, motorcycle);

    return ok(updatedMotorcycle.toDTO());
  }

  private static validateRequest(request: IRequest) {
    const fields = Object.keys(request.payload);
    const required = ['model', 'year', 'color', 'buyValue', 'category', 'engineCapacity'];

    const someIsMissing = required.some((field) => !fields.includes(field));

    if (someIsMissing) throw new RequiredFieldsAreMissingError();
  }
}
