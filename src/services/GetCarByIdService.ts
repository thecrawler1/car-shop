import Car from '../entities/car/Car';
import NotFoundError from '../errors/NotFoundError';
import { ICar } from '../interfaces/ICar';
import IGetCarByIdService from '../interfaces/IGetCarByIdService';
import { IModel } from '../interfaces/IModel';

export default class GetCarByIdService implements IGetCarByIdService {
  constructor(private readonly carModel: IModel<ICar>) {}

  async perform(id: string): Promise<Car> {
    const carDTO: ICar | null = await this.carModel.readOne(id);

    if (!carDTO) throw new NotFoundError();

    return new Car(carDTO);
  }
}
