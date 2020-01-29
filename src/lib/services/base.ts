import ServiceBuilder from './builder'

export type TOptions = {
  root: ServiceBuilder
}

class BaseService {
  private root: ServiceBuilder

  constructor({ root }: TOptions) {
    this.root = root
  }

  public getRoot(): ServiceBuilder {
    if (!this.root) {
      throw new Error('Has no link to root service')
    }

    return this.root
  }
}

export default BaseService
