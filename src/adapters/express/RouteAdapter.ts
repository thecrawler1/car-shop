import { Request, Response } from 'express';

import IController from '../../interfaces/IController';
import IRequest from '../../interfaces/IRequest';
import IResponse from '../../interfaces/IResponse';

export default class RouteAdapter {
  static adapt(controller: IController) {
    return async (req: Request, res: Response) => {
      const request: IRequest = {
        query: req.query,
        params: req.params,
        payload: req.body,
      };
      const response: IResponse = await controller.handle(request);

      res.status(response.statusCode).json(response.data);
    };
  }
}
