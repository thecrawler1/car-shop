import { Router } from 'express';

import RouteAdapter from '../adapters/express/RouteAdapter';
import CreateCarControllerFactory from '../factories/CreateCarControllerFactory';
import GetAllCarsControllerFactory from '../factories/GetAllCarsControllerFactory';
import GetCarByIdControllerFactory from '../factories/GetCarByIdControllerFactory';

const router = Router();
const createCarController = CreateCarControllerFactory.make();
const getAllCarsController = GetAllCarsControllerFactory.make();
const getCarByIdController = GetCarByIdControllerFactory.make();

router.post('/', RouteAdapter.adapt(createCarController));
router.get('/', RouteAdapter.adapt(getAllCarsController));
router.get('/:id', RouteAdapter.adapt(getCarByIdController));

export default router;
