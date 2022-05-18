export interface IDisposable {
  onCreate(): void
  destroy(): void
}

export type InjectableConstructor<T extends IDisposable> = new (container: IDIContainer) => T

export interface IDIContainer {
  createTransient<T extends IDisposable>(creator: InjectableConstructor<T>): T

  createScopedMultiple(creators: InjectableConstructor<IDisposable>[], autoClean?: boolean): void
  createScoped<T extends IDisposable>(creator: InjectableConstructor<T>, autoClean?: boolean): T
  getScoped<T extends IDisposable>(creator: InjectableConstructor<T>): T
  removeScoped<T extends IDisposable>(creator: InjectableConstructor<T>): void
  hasScoped<T extends IDisposable>(creator: InjectableConstructor<T>): boolean
}

const logActions = true

export class DIContainer implements IDIContainer {
  private instances: Map<
    InjectableConstructor<any>,
    { instance: IDisposable; autoClean: boolean }
  > = new Map()

  private createScopedInstance<T extends IDisposable>(
    creator: InjectableConstructor<T>,
    autoClean: boolean
  ): T {
    if (this.instances.get(creator)) {
      throw new Error(`[${creator.name}] already created in this scope`)
    }

    if (logActions) {
      console.log(`[${creator.name}] was created`)
    }

    const instance = new creator(this)

    this.instances.set(creator, {
      instance,
      autoClean,
    })

    return instance
  }

  public createTransient: IDIContainer['createTransient'] = (creator) => {
    const instance = new creator(this)

    instance.onCreate()

    return instance
  }

  public createScopedMultiple: IDIContainer['createScopedMultiple'] = (
    creators,
    autoClean = true
  ) => {
    const instances: IDisposable[] = []

    for (const creator of creators) {
      const instance = this.createScopedInstance(creator, autoClean)

      instances.push(instance)
    }

    for (const instance of instances) {
      instance.onCreate()
    }
  }

  public createScoped: IDIContainer['createScoped'] = (creator, autoClean = true) => {
    const instance = this.createScopedInstance(creator, autoClean)

    instance.onCreate()

    return instance
  }

  public getScoped: IDIContainer['getScoped'] = (creator) => {
    const value = this.instances.get(creator)

    if (!value) {
      throw new Error(`[${creator.name}] is not created in this scope`)
    } else {
      return value.instance as any
    }
  }

  public removeScoped: IDIContainer['removeScoped'] = (creator) => {
    const value = this.instances.get(creator)

    if (!value) {
      throw new Error(`[${creator.name}] is not created in this scope`)
    } else {
      if (logActions) {
        console.log(`[${creator.name}] was destroyed`)
      }

      value.instance.destroy()

      this.instances.delete(creator)
    }
  }

  public hasScoped: IDIContainer['hasScoped'] = (creator) => !!this.instances.get(creator)

  public destroy = () => {
    this.instances.forEach(({ autoClean }, creator) => {
      if (autoClean) {
        this.removeScoped(creator)
      }
    })
  }
}
