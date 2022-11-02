import MotorcycleModel from '../models/MotorcycleModel';
import DeleteMotorcycleService from '../services/DeleteMotorcycleService';
import DeleteMotorcycleController from '../controllers/DeleteMotorcycleController';

export default abstract class DeleteMotorcycleControllerFactory {
  static make() {
    const model = new MotorcycleModel();
    const service = new DeleteMotorcycleService(model);
    const controller = new DeleteMotorcycleController(service);

    return controller;
  }
}
