import { Router } from 'express';

import RouteAdapter from '../adapters/express/RouteAdapter';
import CreateCarControllerFactory from '../factories/CreateCarControllerFactory';
import GetAllCarsControllerFactory from '../factories/GetAllCarsControllerFactory';

const router = Router();
const createCarController = CreateCarControllerFactory.make();
const getAllCarsController = GetAllCarsControllerFactory.make();

router.post('/', RouteAdapter.adapt(createCarController));
router.get('/', RouteAdapter.adapt(getAllCarsController));

export default router;
