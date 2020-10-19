import { CookieSerializeOptions } from 'cookie'
import { NextPageContext } from 'next'
import nookies from 'nookies'

import { BaseService, TOptions as TBaseOptions } from './base'

export type TOptions = TBaseOptions & {
  ctx?: NextPageContext
}

class CookiesService extends BaseService {
  private ctx?: NextPageContext | undefined

  constructor({ ctx, ...options }: TOptions) {
    super(options)

    this.ctx = ctx
  }

  public getCookies() {
    return nookies.get(this.ctx)
  }

  public setItem(key: string, value: string, options?: CookieSerializeOptions) {
    nookies.set(this.ctx, key, value, options || {})
  }

  public getItem(key: string) {
    const cookies = this.getCookies()

    return cookies[key]
  }

  public removeItem(key: string) {
    nookies.destroy(this.ctx, key)
  }
}

export default CookiesService
