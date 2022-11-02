import CreateCarController from '../controllers/CreateCarController';
import CarModel from '../models/CarModel';
import CreateCarService from '../services/CreateCarService';

export default abstract class CreateCarControllerFactory {
  static make() {
    const model = new CarModel();
    const service = new CreateCarService(model);
    const controller = new CreateCarController(service);

    return controller;
  }
}
