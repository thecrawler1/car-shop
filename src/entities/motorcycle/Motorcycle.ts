import { IMotorcycle } from '../../interfaces/IMotorcycle';
import Vehicle from '../vehicle/Vehicle';
import Category from './value-objects/Category';
import EngineCapacity from './value-objects/EngineCapacity';

export default class Motorcycle extends Vehicle {
  protected readonly _category: Category;
  protected readonly _engineCapacity: EngineCapacity;

  constructor(motorcycleDTO: IMotorcycle) {
    super(motorcycleDTO);

    this._category = Category.create(motorcycleDTO.category);
    this._engineCapacity = EngineCapacity.create(motorcycleDTO.engineCapacity);
  }

  toDTO(): IMotorcycle {
    return {
      ...super.toDTO(),
      category: this.category.value,
      engineCapacity: this.engineCapacity.value,
    };
  }

  get category(): Category {
    return this._category;
  }

  get engineCapacity(): EngineCapacity {
    return this._engineCapacity;
  }
}
