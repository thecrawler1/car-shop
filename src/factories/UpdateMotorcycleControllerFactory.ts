import UpdateMotorcycleController from '../controllers/UpdateMotorcycleController';
import MotorcycleModel from '../models/MotorcycleModel';
import UpdateMotorcycleService from '../services/UpdateMotorcycleService';

export default abstract class UpdateMotorcycleControllerFactory {
  static make() {
    const model = new MotorcycleModel();
    const service = new UpdateMotorcycleService(model);
    const controller = new UpdateMotorcycleController(service);

    return controller;
  }
}
