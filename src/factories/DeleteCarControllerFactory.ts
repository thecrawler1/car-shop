import CarModel from '../models/CarModel';
import DeleteCarService from '../services/DeleteCarService';
import DeleteCarController from '../controllers/DeleteCarController';

export default abstract class DeleteCarControllerFactory {
  static make() {
    const model = new CarModel();
    const service = new DeleteCarService(model);
    const controller = new DeleteCarController(service);

    return controller;
  }
}
