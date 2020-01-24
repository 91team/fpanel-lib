import { observable, action } from 'mobx'

import BaseStore from './base'
import { CStore } from './types'

type TInitialState = Partial<User>

class User extends BaseStore<TInitialState> implements CStore {
  @observable token: null | string = null

  @action.bound setToken(token: string) {
    console.log('set token')
    this.token = token
  }

  public serialize() {
    return {
      token: this.token
    }
  }
}

export default User
