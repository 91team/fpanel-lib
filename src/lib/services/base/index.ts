import { CService } from '../types'

export type TOptions = {
  root: App.TBaseServicesManager
}

export class BaseService implements CService {
  static NAME: typeof CService['NAME']
  private root: App.TBaseServicesManager

  constructor({ root }: TOptions) {
    this.root = root
  }

  public asyncInitializer?: CService['asyncInitializer']

  public onInjected?: CService['onInjected']

  public getRoot(): App.TBaseServicesManager {
    if (!this.root) {
      throw new Error('Has no link to root service')
    }

    return this.root
  }

  public getName(): typeof CService['NAME'] {
    // @ts-expect-error
    return this.constructor.NAME
  }
}
