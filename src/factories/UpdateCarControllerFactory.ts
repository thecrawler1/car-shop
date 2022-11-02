import UpdateCarController from '../controllers/UpdateCarController';
import CarModel from '../models/CarModel';
import UpdateCarService from '../services/UpdateCarService';

export default abstract class UpdateCarControllerFactory {
  static make() {
    const model = new CarModel();
    const service = new UpdateCarService(model);
    const controller = new UpdateCarController(service);

    return controller;
  }
}
