import { Route, constants } from 'router5'

import { universalComponent } from 'utils/universalComponent'

import { TIconComponent } from 'components/Icons'

export interface ICustomRoute extends Route {
  component?: ReturnType<typeof universalComponent>
  /**
   * Indicator for root route of a module
   */
  isModule?: boolean
  /** Needed authorization or not */
  withAuth?: boolean
  /** Placed or not in side menu */
  inMenu?: boolean
  /** Display section with aside menu or not */
  withMenu?: boolean
  /** Доступен ли роут в shared режиме */
  isShared?: boolean
  /**
   * Icon for side menu
   */
  icon?: TIconComponent
  title?: string
  children?: TCustomSubPageRoute[]
}

type TCustomSubPageRoute = Omit<ICustomRoute, 'component'> & {
  component?: ICustomRoute['component']
}

export type TCustomAnyRoute = ICustomRoute | TCustomSubPageRoute
export type TCustomModuleRoute = Omit<ICustomRoute, 'name'> & {
  children?: ICustomRoute[]
}
export interface ICustomUnknownRoute extends Omit<ICustomRoute, 'path'> {}

export const routes: ICustomRoute[] = [
  {
    name: 'index',
    path: '/',
    component: universalComponent(import('../../pages/Index')),
    withAuth: true,
    withMenu: true,
  },
  {
    name: 'test',
    path: '/test',
    component: universalComponent(import('../../pages/Test')),
  },
]

export const UNKNOWN_ROUTE: Omit<ICustomRoute, 'path'> = {
  name: constants.UNKNOWN_ROUTE,
  // component: universalComponent(import('../../pages/NotFound')),
}
