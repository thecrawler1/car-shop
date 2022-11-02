import GetAllCarsController from '../controllers/GetAllCarsController';
import CarModel from '../models/CarModel';
import GetAllCarsService from '../services/GetAllCarsService';

export default abstract class GetAllCarsControllerFactory {
  static make() {
    const model = new CarModel();
    const service = new GetAllCarsService(model);
    const controller = new GetAllCarsController(service);

    return controller;
  }
}
