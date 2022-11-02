import GetCarByIdController from '../controllers/GetCarByIdController';
import CarModel from '../models/CarModel';
import GetCarByIdService from '../services/GetCarByIdService';

export default abstract class GetCarByIdControllerFactory {
  static make() {
    const model = new CarModel();
    const service = new GetCarByIdService(model);
    const controller = new GetCarByIdController(service);

    return controller;
  }
}
