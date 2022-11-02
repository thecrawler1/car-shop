import { IVehicle } from '../../interfaces/IVehicle';
import BuyValue from './value-objects/BuyValue';
import Color from './value-objects/Color';
import Model from './value-objects/Model';
import Status from './value-objects/Status';
import Year from './value-objects/Year';

export default abstract class Vehicle {
  protected readonly _model: Model;
  protected readonly _year: Year;
  protected readonly _color: Color;
  protected readonly _buyValue: BuyValue;
  protected readonly _status?: Status;
  protected readonly _id?: string;

  constructor(vehicleDTO: IVehicle) {
    this._model = Model.create(vehicleDTO.model);
    this._year = Year.create(vehicleDTO.year);
    this._color = Color.create(vehicleDTO.color);
    this._buyValue = BuyValue.create(vehicleDTO.buyValue);
    this._id = vehicleDTO._id;

    if (vehicleDTO.status || vehicleDTO.status === false) {
      this._status = Status.create(vehicleDTO.status);
    }
  }

  toDTO(): IVehicle {
    return {
      model: this.model.value,
      year: this.year.value,
      color: this.color.value,
      buyValue: this.buyValue.value,
      status: this.status?.value,
      _id: this.id,
    };
  }

  get model(): Model {
    return this._model;
  }

  get year(): Year {
    return this._year;
  }

  get color(): Color {
    return this._color;
  }

  get buyValue(): BuyValue {
    return this._buyValue;
  }

  get status(): Status | undefined {
    return this._status;
  }

  get id(): string | undefined {
    return this._id;
  }
}
