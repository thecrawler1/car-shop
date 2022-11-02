import Motorcycle from '../entities/motorcycle/Motorcycle';

export default interface IGetAllMotorcyclesService {
  perform(): Promise<Motorcycle[]>;
}
