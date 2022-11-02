import Car from '../entities/car/Car';
import NotFoundError from '../errors/NotFoundError';
import { ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import IUpdateCarService from '../interfaces/IUpdateCarService';

export default class UpdateCarService implements IUpdateCarService {
  constructor(private readonly carModel: IModel<ICar>) {}

  async perform(id: string, car: Car): Promise<Car> {
    const updatedCarDTO: ICar | null = await this.carModel.update(id, car.toDTO());

    if (!updatedCarDTO) throw new NotFoundError();

    return new Car(updatedCarDTO);
  }
}
