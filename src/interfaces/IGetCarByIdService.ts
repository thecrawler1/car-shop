import Car from '../entities/car/Car';

export default interface IGetCarByIdService {
  perform(id: string): Promise<Car>;
}
