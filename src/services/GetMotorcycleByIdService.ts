import Motorcycle from '../entities/motorcycle/Motorcycle';
import NotFoundError from '../errors/NotFoundError';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import IGetMotorcycleByIdService from '../interfaces/IGetMotorcycleByIdService';
import { IModel } from '../interfaces/IModel';

export default class GetMotorcycleByIdService implements IGetMotorcycleByIdService {
  constructor(private readonly motorcycleModel: IModel<IMotorcycle>) {}

  async perform(id: string): Promise<Motorcycle> {
    const motorcycleDTO: IMotorcycle | null = await this.motorcycleModel.readOne(id);

    if (!motorcycleDTO) throw new NotFoundError();

    return new Motorcycle(motorcycleDTO);
  }
}
