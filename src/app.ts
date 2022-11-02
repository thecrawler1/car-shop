import express from 'express';
import 'express-async-errors';

import carRouter from './routers/carRouter';
import motorcycleRouter from './routers/motorcycleRouter';
import errorHandler from './middlewares/errorHandler';

const app = express();

app.use(express.json());
app.use('/cars', carRouter);
app.use('/motorcycles', motorcycleRouter);
app.use(errorHandler);

export default app;
