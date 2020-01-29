import Store from './index'

class BaseStore<TInitialState> {
  private root: Store

  constructor(initialState: TInitialState, root: Store) {
    this.root = root

    for (const key in initialState) {
      // @ts-ignore
      this[key] = initialState[key]
    }
  }

  public getRoot(): Store {
    if (!this.root) {
      throw new Error('Has no link to root store')
    }

    return this.root
  }
}

export default BaseStore
