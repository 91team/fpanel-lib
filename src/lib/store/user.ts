import { observable, action } from 'mobx'

import { CStore } from './types'

type TInitialState = Partial<User>

class User implements CStore {
  constructor(initialState: TInitialState) {
    for (const key in initialState) {
      this[key] = initialState[key]
    }
  }

  @observable token: null | string = null

  @action.bound setToken(token: string) {
    this.token = token
  }

  public serialize() {
    return {
      token: this.token
    }
  }
}

export default User
