import Car from '../entities/car/Car';

export default interface IGetAllCarsService {
  perform(): Promise<Car[]>;
}
