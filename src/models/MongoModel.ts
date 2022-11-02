import { Model, isValidObjectId } from 'mongoose';
import { IModel } from '../interfaces/IModel';
import InvalidMongoIdError from './errors/InvalidMongoIdError';

export default abstract class MongoModel<T> implements IModel<T> {
  protected abstract readonly _mongoModel: Model<T>;

  async create(dto: T): Promise<T> {
    const result = await this._mongoModel.create(dto);

    return { ...dto, _id: result._id.toString() };
  }

  async read(): Promise<T[]> {
    return this._mongoModel.find();
  }

  async readOne(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new InvalidMongoIdError();

    return this._mongoModel.findOne({ _id });
  }

  async update(_id: string, dto: T): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new InvalidMongoIdError();

    return this._mongoModel.findByIdAndUpdate({ _id }, dto);
  }

  async delete(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new InvalidMongoIdError();

    return this._mongoModel.findOneAndDelete({ _id });
  }
}
