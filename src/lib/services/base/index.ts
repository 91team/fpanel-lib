import ServicesManager from '../manager'

export type TOptions = {
  root: ServicesManager
}

export class BaseService {
  private root: ServicesManager

  constructor({ root }: TOptions) {
    this.root = root
  }

  public getRoot(): ServicesManager {
    if (!this.root) {
      throw new Error('Has no link to root service')
    }

    return this.root
  }
}
