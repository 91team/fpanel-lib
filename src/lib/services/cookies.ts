import cookies from 'js-cookie'

export class CookiesService {
  private instance: Cookies.CookiesStatic

  constructor() {
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
