import express from 'express';
import 'express-async-errors';

import carRouter from './routers/carRouter';
import errorHandler from './middlewares/errorHandler';

const app = express();

app.use(express.json());
app.get('/', (_req, res) => res.json({ ok: true }));
app.use('/cars', carRouter);
app.use(errorHandler);

export default app;
