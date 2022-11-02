import Motorcycle from '../entities/motorcycle/Motorcycle';

export default interface ICreateMotorcycleService {
  perform(motorcycle: Motorcycle): Promise<Motorcycle>;
}
