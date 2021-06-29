const ENV_NAMES = ['HOSTNAME_APP', 'HOSTNAME_API', 'HOSTNAME_CDN', 'BASE_URL'] as const

type TVariableName = typeof ENV_NAMES[number]
type TEnvVariables = Partial<Record<TVariableName, string>>

const prefix = 'VITE_'

export function getVariablesWithVitePrefix(env: Record<string, string>) {
  return ENV_NAMES.reduce((result: Record<string, string>, key) => {
    const value = env[key]

    if (value != null) {
      result[`${prefix}${key}`] = value
    }

    return result
  }, {})
}

export function getViteEnv(): TEnvVariables {
  const env = import.meta.env

  const res: TEnvVariables = {}

  if (env) {
    Object.keys(env).forEach((key) => {
      if (key.startsWith(prefix)) {
        // @ts-expect-error
        res[key.slice(prefix.length)] = env[key]
      }
    })
  }

  return res
}
