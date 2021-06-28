// eslint-disable-next-line max-classes-per-file
import { IDIContainer, IDisposable, InjectableConstructor } from '../di'

export abstract class BaseController {
  private container: IDIContainer
  private deps: InjectableConstructor<IDisposable>[] = []

  constructor(container: IDIContainer) {
    this.container = container
  }

  protected onDestroy() {}

  public onCreate() {}

  public addSubController: IDIContainer['createScoped'] = (creator) => {
    const instance = this.container.createScoped(creator, false)

    this.deps.push(creator)

    return instance
  }

  public addSubControllers = (creators: InjectableConstructor<IDisposable>[]) => {
    this.container.createScopedMultiple(creators, false)

    this.deps.push(...creators)
  }

  public removeSubController = (creator: InjectableConstructor<IDisposable>) => {
    const index = this.deps.indexOf(creator)

    if (index < 0) {
      throw new Error('unknown sub controller')
    }

    this.container.removeScoped(creator)

    this.deps.splice(index, 1)
  }

  public getScoped: IDIContainer['getScoped'] = (creator) => this.container.getScoped(creator)

  public hasScoped: IDIContainer['hasScoped'] = (creator) => this.container.hasScoped(creator)

  public destroy() {
    this.deps.forEach((dependency) => this.container.removeScoped(dependency))
    this.onDestroy()
  }
}

class CBaseController extends BaseController {}

export type TConstructorParameters = ConstructorParameters<typeof CBaseController>
