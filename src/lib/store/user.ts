import { action, flow, observable } from 'mobx'

import {
  SessionCreateDocument,
  SessionCreateMutation,
  SessionCreateMutationResult,
  SessionCreateMutationVariables,
} from 'gql/generated/types'

import { CStore } from './types'

import BaseStore from './base'
import Store from './index'

type TInitialState = Partial<User>

class User extends BaseStore<TInitialState> implements CStore {
  @observable token: null | string = null

  public createSession = async () => {
    try {
      const { sessionCreate } = await this.getRoot()
        .getServices()
        .graphqlAPI.mutations.sessionCreate({
          GQLVariables: {
            email: 'admin@ecor.dev',
            password: 'password91',
          },
        })

      this.setToken(sessionCreate.token)
    } catch (e) {
      console.error(e)
    }
  }

  @action.bound private setToken(token: string) {
    this.token = token
  }

  public serialize() {
    return {
      token: this.token,
    }
  }
}

export default User
