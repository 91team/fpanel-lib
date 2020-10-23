import { action, observable } from 'mobx'
import { computedFn } from 'mobx-utils'

import { parseSubControllersNames } from 'lib/utils/formatters/nameSubControllers'

export type TBaseSubControllers<
  TRootController extends BaseController = BaseController<any>,
  TParentController extends BaseController = TRootController
> = { [key: string]: BaseController<TRootController, TParentController> }

export class BaseController<
  TRootController extends BaseController = BaseController<any>,
  TParentController extends BaseController = TRootController
> {
  static NAME: string = '' as const

  /**
   * @constructor
   * @param {BaseController} rootController - родительский контроллер
   */
  constructor(parentController?: TParentController) {
    this.parentController = parentController

    if (parentController) {
      this.rootController = this.getRoot()
    }
  }

  /**
   * Функция поиска корневого контроллера.
   * @param {BaseController} controller - дочерний контроллер
   * @returns {BaseController | undefined}
   */
  static findRootController: (
    controller: BaseController
  ) => BaseController | null = function findParentController(controller) {
    const { parentController } = controller

    if (!parentController) {
      return controller
    }

    return findParentController(parentController)
  }

  protected rootController: TRootController
  protected parentController: TParentController
  @observable.shallow public subControllers: TBaseSubControllers = {}

  /**
   * Функция получения корневого контроллера.
   * @returns {BaseController | undefined}
   */
  private getRoot = (): TRootController =>
    // @ts-expect-error
    this.constructor.findRootController(this)

  /**
   * Функция получения инстанса подконтроллера по его классу.
   * @param {typeof BaseController} subControllerFactory - класс подконтроллера.
   * @returns {T extends BaseController}
   */
  public getSubControllerInstance = <
    T extends BaseController<
      TRootController,
      BaseController<TRootController, TParentController>
    >
  >(
    subControllerFactory: new (
      parent: BaseController<TRootController, TParentController>
    ) => T
  ): T => {
    // @ts-expect-error
    const name: string = subControllerFactory.NAME

    return this.subControllers[name] as T
  }

  /**
   * Функция получения инстанса подконтроллера по его классу (с глубоким поиском).
   * @param {typeof BaseController} subControllerFactory - класс подконтроллера.
   * @returns {T extends BaseController}
   */
  public getDeepSubControllerInstanceFromRoot = computedFn(
    <
      T extends BaseController<
        TRootController,
        BaseController<TRootController, TParentController>
      >
    >(
      controllerFactory: new (
        parent: BaseController<TRootController, TParentController>
      ) => T
    ): T | undefined => {
      // @ts-expect-error
      const name: string = controllerFactory.NAME
      const { subControllersNames } = parseSubControllersNames(name)

      let controller: BaseController = this.getRoot()

      for (const subControllerName of subControllersNames) {
        if (!controller.subControllers[subControllerName]) {
          return
        }

        controller = controller.subControllers[subControllerName]
      }

      return controller as T
    }
  ) as <
    T extends BaseController<
      TRootController,
      BaseController<TRootController, TParentController>
    >
  >(
    controllerFactory: new (
      parent: BaseController<TRootController, TParentController>
    ) => T
  ) => T | undefined

  /**
   * Функция получения инстансов подконтроллеров по классам из всего дерева.
   * @param {typeof BaseController[]} controllerFactories - классы подконтроллеров.
   * @returns {T extends TBaseSubControllers}
   */
  public getDeepSubControllersInstancesFromRoot = computedFn(
    <
      T extends TBaseSubControllers,
      U extends BaseController<
        TRootController,
        BaseController<TRootController, TParentController>
      >
    >(
      controllerFactories: Array<
        new (parent: BaseController<TRootController, TParentController>) => U
      >
    ): T => {
      const result = {}

      for (const factory of controllerFactories) {
        // @ts-expect-error
        const name: string = factory.NAME
        const subController = this.getDeepSubControllerInstanceFromRoot(factory)

        result[name] = subController
      }

      return result as T
    }
  ) as <
    T extends TBaseSubControllers,
    U extends BaseController<
      TRootController,
      BaseController<TRootController, TParentController>
    >
  >(
    controllerFactories: Array<
      new (parent: BaseController<TRootController, TParentController>) => U
    >
  ) => T

  /**
   * Функция добавления подконтроллера.
   * @param {typeof BaseController} subControllerFactory - класс подконтроллера.
   * @param {boolean} cancelOnCreateCallback - true, чтобы отменить вызов onCreate при добавлении подконтроллера.
   * @returns {BaseController | undefined}
   */
  @action.bound public addSubController: <
    T extends BaseController<
      TRootController,
      BaseController<TRootController, TParentController>
    >
  >(
    subControllerFactory: new (
      parent: BaseController<TRootController, TParentController>
    ) => T,
    cancelOnCreateCallback?: boolean
  ) => T | undefined = (
    subControllerFactory,

    cancelOnCreateCallback
  ) => {
    // @ts-expect-error
    const name: string = subControllerFactory.NAME

    try {
      if (this.getSubControllerInstance(subControllerFactory)) {
        throw new Error(`SubController ${name} already exists!`)
      }

      const subController = new subControllerFactory(this)

      this.subControllers[name] = subController

      if (!cancelOnCreateCallback) {
        subController.onCreate()
      }

      return this.subControllers[name] as any
    } catch (e) {
      console.error(e)
    }
  }

  /**
   * Функция добавления подконтроллеров.
   * @param {typeof BaseController[]} subControllersFactories - массив классов подконтроллеров.
   */
  @action.bound public addSubControllers: (
    subControllersFactories: Array<
      new (
        parent: BaseController<TRootController, TParentController>
      ) => BaseController<
        TRootController,
        BaseController<TRootController, TParentController>
      >
    >
  ) => void = subControllersFactories => {
    const subControllers: BaseController[] = []

    for (const subControllerFactory of subControllersFactories) {
      const subController = this.addSubController(
        subControllerFactory,

        true
      )

      if (subController) {
        subControllers.push(subController)
      }
    }

    for (const subController of subControllers) {
      subController.onCreate()
    }
  }

  /**
   * Функция удаления подконтроллера по его классу.
   *  @param {typeof BaseController} subControllerFactory - класс подконтроллера.
   */
  @action.bound public removeSubControllerInstance = <
    T extends BaseController<
      TRootController,
      BaseController<TRootController, TParentController>
    >
  >(
    subControllerFactory: new (
      parent: BaseController<TRootController, TParentController>
    ) => T
  ) => {
    // @ts-expect-error
    const name: string = subControllerFactory.NAME

    if (this.subControllers[name]) {
      this.subControllers[name].onDestroy()

      delete this.subControllers[name]
    }
  }

  /**
   * Функция удаления подконтроллеров по списку классов.
   *  @param {typeof BaseController[]} subControllerFactories - массив классов подконтроллеров.
   */
  @action.bound public removeSubControllersInstance = <
    T extends BaseController<
      TRootController,
      BaseController<TRootController, TParentController>
    >
  >(
    subControllerFactories: Array<
      new (parent: BaseController<TRootController, TParentController>) => T
    >
  ) => {
    for (const factory of subControllerFactories) {
      this.removeSubControllerInstance(factory)
    }
  }

  /**
   * Функция удаления всех подконтроллеров.
   */
  @action.bound public removeAllSubControllers = () => {
    const names = Object.keys(this.subControllers)

    for (const name of names) {
      if (this.subControllers[name]) {
        this.subControllers[name].onDestroy()

        delete this.subControllers[name]
      }
    }
  }

  /**
   * Хендлер создания подконтроллера. Вызывается после инцициализации и перед добавлением в родительнский контроллер.
   */
  onCreate = () => {}

  /**
   * Хендлер удаления подконтроллера. Вызывается перед удалением из родительского контроллера.
   */
  onDestroy = () => {}
}
