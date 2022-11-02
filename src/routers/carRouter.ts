import { Router } from 'express';

import RouteAdapter from '../adapters/express/RouteAdapter';
import CreateCarControllerFactory from '../factories/CreateCarControllerFactory';
import GetAllCarsControllerFactory from '../factories/GetAllCarsControllerFactory';
import GetCarByIdControllerFactory from '../factories/GetCarByIdControllerFactory';
import UpdateCarControllerFactory from '../factories/UpdateCarControllerFactory';

const router = Router();
const createCarController = CreateCarControllerFactory.make();
const getAllCarsController = GetAllCarsControllerFactory.make();
const getCarByIdController = GetCarByIdControllerFactory.make();
const updateCarController = UpdateCarControllerFactory.make();

router.post('/', RouteAdapter.adapt(createCarController));
router.get('/', RouteAdapter.adapt(getAllCarsController));
router.get('/:id', RouteAdapter.adapt(getCarByIdController));
router.put('/:id', RouteAdapter.adapt(updateCarController));

export default router;
