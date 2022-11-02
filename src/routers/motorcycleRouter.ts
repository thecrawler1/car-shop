import { Router } from 'express';

import RouteAdapter from '../adapters/express/RouteAdapter';
import CreateMotorcycleControllerFactory from '../factories/CreateMotorcycleControllerFactory';
import DeleteMotorcycleControllerFactory from '../factories/DeleteMotorcycleControllerFactory';
import GetAllMotorcyclesControllerFactory from '../factories/GetAllMotorcyclesControllerFactory';
import GetMotorcycleByIdControllerFactory from '../factories/GetMotorcycleByIdControllerFactory';
import UpdateMotorcycleControllerFactory from '../factories/UpdateMotorcycleControllerFactory';

const router = Router();
const createMotorcycleController = CreateMotorcycleControllerFactory.make();
const getAllMotorcyclesController = GetAllMotorcyclesControllerFactory.make();
const getMotorcycleByIdController = GetMotorcycleByIdControllerFactory.make();
const updateMotorcycleController = UpdateMotorcycleControllerFactory.make();
const deleteMotorcycleController = DeleteMotorcycleControllerFactory.make();

router.post('/', RouteAdapter.adapt(createMotorcycleController));
router.get('/', RouteAdapter.adapt(getAllMotorcyclesController));
router.get('/:id', RouteAdapter.adapt(getMotorcycleByIdController));
router.put('/:id', RouteAdapter.adapt(updateMotorcycleController));
router.delete('/:id', RouteAdapter.adapt(deleteMotorcycleController));

export default router;
