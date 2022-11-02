import Car from '../entities/car/Car';
import IController from '../interfaces/IController';
import ICreateCarService from '../interfaces/ICreateCarService';
import IRequest from '../interfaces/IRequest';
import IResponse from '../interfaces/IResponse';
import RequiredFieldsAreMissingError from './errors/RequiredFieldsAreMissingError';
import { created } from './helpers/httpResponses';

export default class CreateCarController implements IController {
  constructor(private readonly createCarService: ICreateCarService) {}

  async handle(request: IRequest): Promise<IResponse> {
    CreateCarController.validateRequest(request);

    const car: Car = await this.createCarService.perform(new Car(request.payload));

    return created(car);
  }

  private static validateRequest(request: IRequest) {
    const fields = Object.keys(request.payload);
    const required = ['model', 'year', 'color', 'buyValue', 'doorsQty', 'seatsQty'];

    const someIsMissing = required.some((field) => !fields.includes(field));

    if (someIsMissing) throw new RequiredFieldsAreMissingError();
  }
}
