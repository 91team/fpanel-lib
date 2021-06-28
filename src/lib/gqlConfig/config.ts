import { TConfig } from '../../../scripts/generateGQLConfigs/types'

export const config: TConfig = {
  session: {
    mutations: [
      { name: 'sessionCreate', errorMessage: 'Не удалось создать сессию' },
      { name: 'sessionRefresh', errorMessage: 'Не удалось обновить сессию' },
      { name: 'sessionDelete', errorMessage: 'Не удалось удалить сессию' },
    ],
  },
}
