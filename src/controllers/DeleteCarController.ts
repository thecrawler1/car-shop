import IController from '../interfaces/IController';
import IDeleteCarService from '../interfaces/IDeleteCarService';
import IRequest from '../interfaces/IRequest';
import IResponse from '../interfaces/IResponse';
import { noContent } from './helpers/httpResponses';

export default class DeleteCarController implements IController {
  constructor(private readonly deleteCarService: IDeleteCarService) {}

  async handle(request: IRequest): Promise<IResponse> {
    await this.deleteCarService.perform(request.params.id);

    return noContent();
  }
}
