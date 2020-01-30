import { observable, action, flow } from 'mobx'

import Store from './index'
import BaseStore from './base'
import { CStore } from './types'
import {
  SessionCreateDocument,
  SessionCreateMutationResult,
  SessionCreateMutation,
  SessionCreateMutationVariables
} from 'gql/generated/types'

type TInitialState = Partial<User>

class User extends BaseStore<TInitialState> implements CStore {
  @observable token: null | string = null

  public createSession = flow(function*() {
    // @ts-ignore
    const apolloClient: App.TApollo = (this.getRoot() as Store)
      .getServices()
      .apollo.getClient()

    try {
      const { data }: SessionCreateMutationResult = yield apolloClient.mutate<
        SessionCreateMutation,
        SessionCreateMutationVariables
      >({
        mutation: SessionCreateDocument,
        variables: {
          email: 'admin@ecor.dev',
          password: 'password91'
        }
      })

      if (data && data.sessionCreate) {
        // @ts-ignore
        ;(this as User).setToken(data.sessionCreate.token)
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
