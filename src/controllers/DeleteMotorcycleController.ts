import IController from '../interfaces/IController';
import IDeleteMotorcycleService from '../interfaces/IDeleteMotorcycleService';
import IRequest from '../interfaces/IRequest';
import IResponse from '../interfaces/IResponse';
import { noContent } from './helpers/httpResponses';

export default class DeleteMotorcycleController implements IController {
  constructor(private readonly deleteMotorcycleService: IDeleteMotorcycleService) {}

  async handle(request: IRequest): Promise<IResponse> {
    await this.deleteMotorcycleService.perform(request.params.id);

    return noContent();
  }
}
