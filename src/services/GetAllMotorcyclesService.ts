import Motorcycle from '../entities/motorcycle/Motorcycle';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import IGetAllMotorcyclesService from '../interfaces/IGetAllMotorcyclesService';
import { IModel } from '../interfaces/IModel';

export default class GetAllMotorcyclesService implements IGetAllMotorcyclesService {
  constructor(private readonly motorcycleModel: IModel<IMotorcycle>) {}

  async perform(): Promise<Motorcycle[]> {
    const dtos: IMotorcycle[] = await this.motorcycleModel.read();
    const motorcycles = dtos.map((dto) => new Motorcycle(dto));

    return motorcycles;
  }
}
