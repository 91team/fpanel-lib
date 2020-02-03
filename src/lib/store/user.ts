import { observable, action, flow } from 'mobx'

import BaseStore from './base'
import { CStore } from './types'

type TInitialState = Partial<User>

class User extends BaseStore<TInitialState> implements CStore {
  @observable token: null | string = null

  public createSession = flow(function*() {
    try {
      const data: { token: string } = yield new Promise(resolve =>
        setTimeout(
          () =>
            resolve({
              token: 'test_token'
            }),
          2000
        )
      )

      if (data && data.token) {
        // @ts-ignore
        ;(this as User).setToken(data.token)
      }
    } catch (error) {
      console.error(error)
    }
  })

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
