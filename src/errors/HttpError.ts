export default abstract class HttpError extends Error {
  private readonly _statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);

    this._statusCode = statusCode;
    this.name = 'HttpError';
  }

  get statusCode(): number {
    return this._statusCode;
  }
}
