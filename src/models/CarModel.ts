import { model, Schema } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import MongoModel from './MongoModel';

const schema = new Schema<ICar>({
  status: Boolean,
  model: String,
  year: Number,
  color: String,
  buyValue: Number,
  doorsQty: Number,
  seatsQty: Number,
}, {
  versionKey: false,
});

export default class CarModel extends MongoModel<ICar> {
  protected override readonly _mongoModel = model('Car', schema);
}
