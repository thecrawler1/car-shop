import Car from '../entities/car/Car';
import IController from '../interfaces/IController';
import IRequest from '../interfaces/IRequest';
import IResponse from '../interfaces/IResponse';
import IUpdateCarService from '../interfaces/IUpdateCarService';
import RequiredFieldsAreMissingError from './errors/RequiredFieldsAreMissingError';
import { ok } from './helpers/httpResponses';

export default class UpdateCarController implements IController {
  constructor(private readonly updateCarService: IUpdateCarService) {}

  async handle(request: IRequest): Promise<IResponse> {
    UpdateCarController.validateRequest(request);

    const { id } = request.params;
    const car = new Car(request.payload);
    const updatedCar: Car = await this.updateCarService.perform(id, car);

    return ok(updatedCar.toDTO());
  }

  private static validateRequest(request: IRequest) {
    const fields = Object.keys(request.payload);
    const required = ['model', 'year', 'color', 'buyValue', 'doorsQty', 'seatsQty'];

    const someIsMissing = required.some((field) => !fields.includes(field));

    if (someIsMissing) throw new RequiredFieldsAreMissingError();
  }
}
