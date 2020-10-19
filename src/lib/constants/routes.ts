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
    forwardTo: 'navigation',
    withAuth: true,
    withMenu: true,
  },
  // {
  //   name: 'navigation',
  //   path: '/navigation',
  //   component: universalComponent(import('../../pages/Navigation')),
  //   withAuth: true,
  //   withMenu: true,
  //   isShared: true,
  // },
  // {
  //   name: 'navigationFolder',
  //   path: '/navigation/:folderId',
  //   component: universalComponent(import('../../pages/Navigation')),
  //   withAuth: true,
  //   withMenu: true,
  //   isShared: true,
  // },
  // {
  //   name: 'about',
  //   path: '/about',
  //   component: universalComponent(import('../../pages/About')),
  //   withAuth: true,
  //   withMenu: true,
  // },
  // {
  //   name: 'testing',
  //   path: '/testing',
  //   component: universalComponent(import('../../pages/Test')),
  //   withAuth: true,
  //   withMenu: true,
  // },
  // {
  //   name: 'login',
  //   path: '/login',
  //   component: universalComponent(import('../../pages/Login')),
  //   withAuth: false,
  //   withMenu: true,
  // },
]

export const UNKNOWN_ROUTE: Omit<ICustomRoute, 'path'> = {
  name: constants.UNKNOWN_ROUTE,
  // component: universalComponent(import('../../pages/NotFound')),
}
