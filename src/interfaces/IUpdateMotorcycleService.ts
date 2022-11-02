import Motorcycle from '../entities/motorcycle/Motorcycle';

export default interface IUpdateMotorcycleService {
  perform(id: string, motorcycle: Motorcycle): Promise<Motorcycle>;
}
