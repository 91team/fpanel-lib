import { action, computed, observable } from 'mobx'

import { getGraphqlMutations } from 'lib/utils/global'
import { getDataFromLS, setDataToLS } from 'lib/utils/localStorage'

import { STATE } from 'lib/constants/api'

import { UserFragment } from 'lib/gql/generated/types'

const TOKENS_PERSIST_KEY = 'user_tokens'

class User {
  @observable public token: null | string = this.getTokens().token
  @observable public profile: UserFragment = null
  @observable public loadingState: STATE = STATE.IDLE

  @computed public get isAuthorized(): boolean {
    return !!this.token && !!this.profile
  }

  @computed public get isLoading(): boolean {
    return this.loadingState === STATE.LOADING
  }

  public createSession = async (email: string, password: string) => {
    try {
      const { sessionCreate } = await getGraphqlMutations().sessionCreate({
        GQLVariables: {
          email,
          password,
        },
        setState: this.setState,
      })

      this.setTokens(sessionCreate.token, sessionCreate.refreshToken)
      this.profile = sessionCreate.user
    } catch (e) {
      console.error(e)
    }
  }

  public refreshSession = async () => {
    const { refreshToken } = this.getTokens()

    try {
      const { sessionRefresh } = await getGraphqlMutations().sessionRefresh({
        GQLVariables: {
          refreshToken,
        },
      })

      this.setTokens(sessionRefresh.token, sessionRefresh.refreshToken)
      this.profile = sessionRefresh.user
    } catch (e) {
      console.error(e)
    }
  }

  public deleteSession = async () => {
    try {
      const { sessionDelete } = await getGraphqlMutations().sessionDelete({})

      this.setTokens(null, null)
    } catch (e) {
      console.error(e)
    }
  }

  @action.bound private setState(state: STATE) {
    this.loadingState = state
  }

  @action.bound private setTokens(token: string, refreshToken: string) {
    this.token = token
    setDataToLS(TOKENS_PERSIST_KEY, { token, refreshToken })
  }

  public getTokens(): { token: string | undefined; refreshToken: string | undefined } {
    const tokens = getDataFromLS(TOKENS_PERSIST_KEY)

    return {
      token: tokens?.token,
      refreshToken: tokens?.refreshToken,
    }
  }

  public serialize() {
    return {
      token: this.token,
      loadingState: this.loadingState,
    }
  }
}

export default User
