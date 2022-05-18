import { cloneDeep } from 'lodash'

import { getObjectKeys } from 'src/lib/utils/getObjectKeys'

type IfRequired<T extends object, K extends keyof T, Required, Optional> = T extends Record<K, T[K]>
  ? Required
  : Optional

type RequiredKeys<T extends object> = Exclude<
  {
    [K in keyof T]: IfRequired<T, K, K, never>
  }[keyof T],
  undefined
>

type OptionalAndObjectKeys<T extends object> = Exclude<
  {
    [K in keyof T]: IfRequired<
      T,
      K,
      T[K] extends object ? (T[K] extends (infer U)[] ? (U extends object ? K : never) : K) : never,
      K
    >
  }[keyof T],
  undefined
>

export type FillDefaults<T2, T = NonNullable<T2>> = T extends object
  ? {
      [P in OptionalAndObjectKeys<T>]?: NonNullable<T[P]> extends object
        ? NonNullable<T[P]> extends (infer U)[]
          ? NonNullable<U> extends object
            ? [FillDefaults<NonNullable<U>>]
            : T extends Record<P, T[P]>
            ? never
            : [NonNullable<U>]
          : FillDefaults<NonNullable<T[P]>>
        : T extends Record<P, T[P]>
        ? never
        : T[P]
    } & {
      __new?: {
        [P in RequiredKeys<T>]: T[P]
      }
      __transform?: (value: T) => unknown
    }
  : T

type RecursiveDefaults<T extends object> = T extends (infer U)[]
  ? U extends object
    ? RecursiveDefaults<U>[]
    : U[]
  : {
      [P in keyof T]?: T[P] extends object ? RecursiveDefaults<T[P]> : T[P]
    } & { __transform?: (value: T) => any }

type x = RecursiveDefaults<{ val: { a?: number; b: string }[] }>

export type Fill<
  T extends object,
  D extends { __transform?: (value: T) => any } & object,
  TransformFn = D['__transform']
> = TransformFn extends (v: any) => any
  ? ReturnType<TransformFn>
  : Omit<T, Exclude<keyof D, '__new' | '__transform'>> & {
      [P in keyof (D | T)]-?: NonNullable<D[P]> extends (infer U)[]
        ? U extends object
          ? NonNullable<T[P]> extends (infer U2)[]
            ? U2 extends object
              ? Fill<NonNullable<U2>, U>[]
              : never
            : never
          : U[]
        : NonNullable<D[P]> extends object
        ? NonNullable<T[P]> extends object
          ? T extends Record<P, T[P]>
            ? NonNullable<T[P]> extends object
              ? Fill<NonNullable<T[P]>, NonNullable<D[P]>>
              : never
            : '__new' extends keyof D[P]
            ? Fill<NonNullable<T[P]>, NonNullable<D[P]>>
            : Fill<NonNullable<T[P]>, NonNullable<D[P]>> | null
          : never
        : NonNullable<D[P]>
    }

function transformFillDefaultsToObject(object: object): object {
  if (typeof object !== 'object' || object == null) {
    return object
  }

  if (Array.isArray(object)) {
    object.length = 0

    return object
  }

  Object.values(object).forEach((value) => transformFillDefaultsToObject(value))

  return object
}

export function fillDefaults<
  T extends {},
  D extends { __transform?: (value: any) => any } & object
>(object: T, defaults: D): Fill<T, D> {
  if (Array.isArray(object)) {
    // @ts-expect-error
    return object.map((obj) => fillDefaults(obj, defaults[0]))
  }

  let res = {
    ...object,
  }

  const allKeys = getObjectKeys(object)

  allKeys.forEach((key) => {
    const currentValue = res[key]
    // @ts-expect-error
    const defaultValue = defaults[key] as typeof currentValue

    if (defaultValue != null) {
      if (currentValue == null) {
        if (Array.isArray(defaultValue)) {
          // @ts-expect-error
          res[key] = []
        } else {
          if (typeof defaultValue === 'object' && defaultValue != null) {
            // @ts-expect-error
            const { __new, __transform, ...other } = defaultValue

            // @ts-expect-error
            res[key] = __new
              ? fillDefaults(
                  { ...transformFillDefaultsToObject(cloneDeep(other)), ...__new },
                  defaultValue
                )
              : null
          } else {
            res[key] = defaultValue
          }
        }
      } else if (Array.isArray(currentValue) && Array.isArray(defaultValue)) {
        if (defaultValue[0] != null) {
          // @ts-expect-error
          res[key] = currentValue.map((value) => {
            if (value && typeof value === 'object') {
              return fillDefaults(value, defaultValue[0])
            }

            return value == null ? defaultValue[0] : value
          })
        }
      } else if (typeof currentValue === 'object') {
        // @ts-expect-error
        res[key] = fillDefaults(res[key], defaultValue)
      }
    }

    // @ts-expect-error
    const __transform = defaultValue?.__transform

    if (
      __transform &&
      typeof res[key] === 'object' &&
      res[key] != null &&
      !Array.isArray(res[key])
    ) {
      res[key] = __transform(res[key]) // ?
    }
  })

  if (defaults.__transform) {
    res = defaults.__transform(res)
  }

  // @ts-expect-error
  return res
}
