import Motorcycle from '../entities/motorcycle/Motorcycle';
import IController from '../interfaces/IController';
import IGetMotorcycleByIdService from '../interfaces/IGetMotorcycleByIdService';
import IRequest from '../interfaces/IRequest';
import IResponse from '../interfaces/IResponse';
import { ok } from './helpers/httpResponses';

export default class GetMotorcycleByIdController implements IController {
  constructor(private readonly getMotorcycleByIdService: IGetMotorcycleByIdService) {}

  async handle(request: IRequest): Promise<IResponse> {
    const motorcycle: Motorcycle = await this.getMotorcycleByIdService.perform(request.params.id);

    return ok(motorcycle.toDTO());
  }
}
