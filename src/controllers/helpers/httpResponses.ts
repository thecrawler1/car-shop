import IResponse from '../../interfaces/IResponse';

export function created(data: any): IResponse {
  return {
    data,
    statusCode: 201,
  };
}
