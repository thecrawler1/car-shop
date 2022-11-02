import { Model } from 'mongoose';
import { IModel } from '../interfaces/IModel';

export default abstract class MongoModel<T> implements IModel<T> {
  protected abstract readonly _mongoModel: Model<T>;

  async create(dto: T): Promise<T> {
    return this._mongoModel.create(dto);
  }

  async read(): Promise<T[]> {
    return this._mongoModel.find();
  }

  async readOne(_id: string): Promise<T | null> {
    return this._mongoModel.findOne({ _id });
  }

  async update(_id: string, dto: T): Promise<T | null> {
    return this._mongoModel.findByIdAndUpdate({ _id }, dto);
  }

  async delete(_id: string): Promise<T | null> {
    return this._mongoModel.findOneAndDelete({ _id });
  }
}
