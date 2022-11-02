import CreateMotorcycleController from '../controllers/CreateMotorcycleController';
import MotorcycleModel from '../models/MotorcycleModel';
import CreateMotorcycleService from '../services/CreateMotorcycleService';

export default abstract class CreateMotorcycleControllerFactory {
  static make() {
    const model = new MotorcycleModel();
    const service = new CreateMotorcycleService(model);
    const controller = new CreateMotorcycleController(service);

    return controller;
  }
}
