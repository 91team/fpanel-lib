import cookies from 'js-cookie'

import { BaseService, TOptions as TBaseOptions } from './base'

export type TOptions = TBaseOptions

export class CookiesService extends BaseService {
  private instance: Cookies.CookiesStatic

  constructor(options: TOptions) {
    super(options)

    this.instance = cookies
  }

  public set = (name: string, value: any, options?: any) => {
    this.instance.set(name, value, options)
  }

  public get = (name: string): string => this.instance.get(name)

  public remove = (name: string) => {
    this.instance.remove(name)
  }
}
