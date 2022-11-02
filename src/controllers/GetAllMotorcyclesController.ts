import Motorcycle from '../entities/motorcycle/Motorcycle';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import IController from '../interfaces/IController';
import IGetAllMotorcyclesService from '../interfaces/IGetAllMotorcyclesService';
import IRequest from '../interfaces/IRequest';
import IResponse from '../interfaces/IResponse';
import { ok } from './helpers/httpResponses';

export default class GetAllMotorcyclesController implements IController {
  constructor(private readonly getAllMotorcyclesService: IGetAllMotorcyclesService) {}

  async handle(_request: IRequest): Promise<IResponse> {
    const motorcycles: Motorcycle[] = await this.getAllMotorcyclesService.perform();
    const dtos: IMotorcycle[] = motorcycles.map((motorcycle) => motorcycle.toDTO());

    return ok(dtos);
  }
}
