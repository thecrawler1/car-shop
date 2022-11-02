import Car from '../entities/car/Car';
import { ICar } from '../interfaces/ICar';
import ICreateCarService from '../interfaces/ICreateCarService';
import { IModel } from '../interfaces/IModel';

export default class CreateCarService implements ICreateCarService {
  constructor(private readonly carModel: IModel<ICar>) {}

  async perform(car: Car): Promise<Car> {
    const dto = await this.carModel.create(car.toDTO());

    return new Car(dto);
  }
}
