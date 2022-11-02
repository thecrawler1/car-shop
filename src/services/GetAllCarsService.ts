import Car from '../entities/car/Car';
import { ICar } from '../interfaces/ICar';
import IGetAllCarsService from '../interfaces/IGetAllCarsService';
import { IModel } from '../interfaces/IModel';

export default class GetAllCarsService implements IGetAllCarsService {
  constructor(private readonly carModel: IModel<ICar>) {}

  async perform(): Promise<Car[]> {
    const dtos: ICar[] = await this.carModel.read();
    const cars = dtos.map((dto) => new Car(dto));

    return cars;
  }
}
