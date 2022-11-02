import Car from '../entities/car/Car';

export default interface IUpdateCarService {
  perform(id: string, car: Car): Promise<Car>;
}
