import IResponse from '../../interfaces/IResponse';

export function created(data: any): IResponse {
  return {
    data,
    statusCode: 201,
  };
}

export function ok(data: any): IResponse {
  return {
    data,
    statusCode: 200,
  };
}
