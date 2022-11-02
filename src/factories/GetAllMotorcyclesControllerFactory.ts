import GetAllMotorcyclesController from '../controllers/GetAllMotorcyclesController';
import MotorcycleModel from '../models/MotorcycleModel';
import GetAllMotorcyclesService from '../services/GetAllMotorcyclesService';

export default abstract class GetAllMotorcyclesControllerFactory {
  static make() {
    const model = new MotorcycleModel();
    const service = new GetAllMotorcyclesService(model);
    const controller = new GetAllMotorcyclesController(service);

    return controller;
  }
}
