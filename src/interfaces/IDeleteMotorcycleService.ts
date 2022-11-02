export default interface IDeleteMotorcycleService {
  perform(id: string): Promise<void>;
}
