class BaseStore<TInitialState> {
  constructor(initialState: TInitialState) {
    for (const key in initialState) {
      // @ts-ignore
      this[key] = initialState[key]
    }
  }
}

export default BaseStore
