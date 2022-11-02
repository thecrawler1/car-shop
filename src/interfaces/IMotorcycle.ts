import { IVehicle } from './IVehicle';

export type CategoryType = 'Street' | 'Custom' | 'Trail';

export interface IMotorcycle extends IVehicle {
  category: CategoryType;
  engineCapacity: number;
}
