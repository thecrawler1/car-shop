import Motorcycle from '../entities/motorcycle/Motorcycle';

export default interface IGetMotorcycleByIdService {
  perform(id: string): Promise<Motorcycle>;
}
