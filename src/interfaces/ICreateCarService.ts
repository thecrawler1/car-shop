import Car from "../entities/car/Car";

export default interface ICreateCarService {
  perform(car: Car): Promise<Car>;
}
