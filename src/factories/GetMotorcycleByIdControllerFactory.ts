import GetMotorcycleByIdController from '../controllers/GetMotorcycleByIdController';
import MotorcycleModel from '../models/MotorcycleModel';
import GetMotorcycleByIdService from '../services/GetMotorcycleByIdService';

export default abstract class GetMotorcycleByIdControllerFactory {
  static make() {
    const model = new MotorcycleModel();
    const service = new GetMotorcycleByIdService(model);
    const controller = new GetMotorcycleByIdController(service);

    return controller;
  }
}
