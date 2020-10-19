export abstract class CService {
  static NAME: string

  /**
   * The method is called when the service is initialized and before `onInjected`.
   * It's must contain only async logic.
   */
  public abstract asyncInitializer?: () => Promise<void>

  /**
   * The method is called when the service is initialized and added to the pool.
   */
  public abstract onInjected?: () => void

  /**
   * The method for getting service name
   */
  public abstract getName(): typeof CService['NAME']
}
