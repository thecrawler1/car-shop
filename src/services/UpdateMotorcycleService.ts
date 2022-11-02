import Motorcycle from '../entities/motorcycle/Motorcycle';
import NotFoundError from '../errors/NotFoundError';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import { IModel } from '../interfaces/IModel';
import IUpdateMotorcycleService from '../interfaces/IUpdateMotorcycleService';

export default class UpdateMotorcycleService implements IUpdateMotorcycleService {
  constructor(private readonly motorcycleModel: IModel<IMotorcycle>) {}

  async perform(id: string, motorcycle: Motorcycle): Promise<Motorcycle> {
    const updatedMotorcycleDTO: IMotorcycle | null = await this.motorcycleModel
      .update(id, motorcycle.toDTO());

    if (!updatedMotorcycleDTO) throw new NotFoundError();

    return new Motorcycle(updatedMotorcycleDTO);
  }
}
