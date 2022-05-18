const KEYS = {
  DEFAULT: 'dark',
  LIGHT: 'light',
} as const

export type TKeys = keyof typeof KEYS
export type TValues = typeof KEYS[TKeys]

export { KEYS }
