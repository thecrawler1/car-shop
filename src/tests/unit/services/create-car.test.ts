import { expect } from 'chai';

import { ICar } from '../../../interfaces/ICar';
import { IModel } from '../../../interfaces/IModel';
import CreateCarService from '../../../services/CreateCarService';

const validCarDTO: ICar = {
  _id: '4edd40c86762e0fb12000003',
  model: 'Ferrari Maranello',
  year: 1963,
  color: 'red',
  status: true,
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
}

class FakeModel implements IModel<any> {
  async create(_x: any): Promise<ICar> {
    return validCarDTO;
  }
  async read(): Promise<[]> {
    return [];
  }
  async readOne(_x: any): Promise<void> {}
  async update(_x: any, _y: any): Promise<void> {}
  async delete(_x: any): Promise<void> {}
}

const fakeModel = new FakeModel();
const createCarService = new CreateCarService(fakeModel as any);

describe('Create Car Service', function () {
  it('should create a car', async function () {
    const result = await createCarService.perform({ toDTO: () => {} } as any);

    expect(result.toDTO()).to.be.deep.equal(validCarDTO);
  });
});
