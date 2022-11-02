export default interface IDeleteCarService {
  perform(id: string): Promise<void>;
}
