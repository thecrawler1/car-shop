import NotFoundError from '../errors/NotFoundError';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import IDeleteMotorcycleService from '../interfaces/IDeleteMotorcycleService';
import { IModel } from '../interfaces/IModel';

export default class DeleteMotorcycleService implements IDeleteMotorcycleService {
  constructor(private readonly motorcycleModel: IModel<IMotorcycle>) {}

  async perform(id: string): Promise<void> {
    const motorcycleDTO = await this.motorcycleModel.delete(id);

    if (!motorcycleDTO) throw new NotFoundError();
  }
}
