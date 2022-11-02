import Car from '../entities/car/Car';
import IController from '../interfaces/IController';
import IGetCarByIdService from '../interfaces/IGetCarByIdService';
import IRequest from '../interfaces/IRequest';
import IResponse from '../interfaces/IResponse';
import { ok } from './helpers/httpResponses';

export default class GetCarByIdController implements IController {
  constructor(private readonly getCarByIdService: IGetCarByIdService) {}

  async handle(request: IRequest): Promise<IResponse> {
    const car: Car = await this.getCarByIdService.perform(request.params.id);

    return ok(car.toDTO());
  }
}
