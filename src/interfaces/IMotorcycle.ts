import { IVehicle } from './IVehicle';

export type categoryType = 'Street' | 'Custom' | 'Trail';

export interface IMotorcycle extends IVehicle {
  category: categoryType;
  engineCapacity: number;
}
