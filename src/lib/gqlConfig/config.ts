import { TConfig } from '../../../scripts/generateGQLConfigs/types'

export const config: TConfig = {
  session: {
    mutations: [
      { name: 'sessionCreate', errorMessage: 'Не удалось создать сессию' },
      { name: 'sessionUpdate', errorMessage: 'Не удалось обновить сессию' },
      { name: 'sessionDelete', errorMessage: 'Не удалось удалить сессию' },
    ],
    queries: [{ name: 'profileGet', errorMessage: 'Не удалось получить профиль' }],
  },
}
