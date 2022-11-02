import Car from '../entities/car/Car';
import IController from '../interfaces/IController';
import IGetAllCarsService from '../interfaces/IGetAllCarsService';
import IRequest from '../interfaces/IRequest';
import IResponse from '../interfaces/IResponse';
import { ok } from './helpers/httpResponses';

export default class GetAllCarsController implements IController {
  constructor(private readonly getAllCarsService: IGetAllCarsService) {}

  async handle(_request: IRequest): Promise<IResponse> {
    const cars: Car[] = await this.getAllCarsService.perform();

    return ok(cars);
  }
}
