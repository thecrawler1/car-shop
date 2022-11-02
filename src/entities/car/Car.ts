import { ICar } from '../../interfaces/ICar';
import Vehicle from '../vehicle/Vehicle';
import DoorsQty from './value-objects/DoorsQty';
import SeatsQty from './value-objects/SeatsQty';

export default class Car extends Vehicle {
  protected readonly _doorsQty: DoorsQty;
  protected readonly _seatsQty: SeatsQty;

  constructor(carDTO: ICar) {
    super(carDTO);

    this._doorsQty = DoorsQty.create(carDTO.doorsQty);
    this._seatsQty = SeatsQty.create(carDTO.seatsQty);
  }

  toDTO(): ICar {
    return {
      ...super.toDTO(),
      doorsQty: this.doorsQty.value,
      seatsQty: this.seatsQty.value,
    };
  }

  get doorsQty(): DoorsQty {
    return this._doorsQty;
  }

  get seatsQty(): SeatsQty {
    return this._seatsQty;
  }
}
