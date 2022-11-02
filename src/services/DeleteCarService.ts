import NotFoundError from '../errors/NotFoundError';
import { ICar } from '../interfaces/ICar';
import IDeleteCarService from '../interfaces/IDeleteCarService';
import { IModel } from '../interfaces/IModel';

export default class DeleteCarService implements IDeleteCarService {
  constructor(private readonly carModel: IModel<ICar>) {}

  async perform(id: string): Promise<void> {
    const carDTO = await this.carModel.delete(id);

    if (!carDTO) throw new NotFoundError();
  }
}
