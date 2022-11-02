import Motorcycle from '../entities/motorcycle/Motorcycle';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import ICreateMotorcycleService from '../interfaces/ICreateMotorcycleService';
import { IModel } from '../interfaces/IModel';

export default class CreateMotorcycleService implements ICreateMotorcycleService {
  constructor(private readonly motorcycleModel: IModel<IMotorcycle>) {}

  async perform(motorcycle: Motorcycle): Promise<Motorcycle> {
    const dto: IMotorcycle = await this.motorcycleModel.create(motorcycle.toDTO());

    return new Motorcycle(dto);
  }
}
