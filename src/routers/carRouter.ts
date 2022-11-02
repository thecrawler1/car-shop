import { Router } from 'express';

import RouteAdapter from '../adapters/express/RouteAdapter';
import CreateCarControllerFactory from '../factories/CreateCarControllerFactory';

const router = Router();
const createCarController = CreateCarControllerFactory.make();

router.post('/', RouteAdapter.adapt(createCarController));

export default router;
