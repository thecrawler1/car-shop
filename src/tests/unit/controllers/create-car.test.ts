import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import CreateCarController from '../../../controllers/CreateCarController';
import RequiredFieldsAreMissingError from '../../../controllers/errors/RequiredFieldsAreMissingError';
import ICreateCarService from '../../../interfaces/ICreateCarService';

chai.use(chaiAsPromised);

const { expect } = chai;

class FakeCreateCarService implements ICreateCarService {
  car: any;

  async perform(): Promise<any> {
    return this.car;
  }
}

const fakeCreateCarService = new FakeCreateCarService();
const createCarController = new CreateCarController(fakeCreateCarService);

describe('Create Car Controller', function () {
  it('should throw a bad request error when body request is empty', async function () {
    await expect(createCarController.handle({ payload: {} } as any)).to.be.eventually
      .rejectedWith(RequiredFieldsAreMissingError);
  });
});
