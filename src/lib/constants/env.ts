function getViteEnv(): Record<string, any> {
  const env = import.meta.env
  const prefix = 'VITE_'

  if (env) {
    return Object.entries(env)
      .filter(([key]) => key.startsWith(prefix))
      .reduce((result: Record<string, any>, [key, value]) => {
        result[key.replace(prefix, '')] = value

        delete env[key]

        return result
      }, env)
  }

  return {}
}

export const ENV = getViteEnv()

export const isDev = import.meta.env.DEV
