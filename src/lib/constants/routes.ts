import { ComponentType } from 'react'
import { constants, Route, State } from 'router5'

import { MainPage } from '../../pages/Main/Main'
import { NotFoundPage } from '../../pages/NotFound'

type TRouteComponent = ComponentType<{ route: State; previousRoute: State | null }>

export interface ICustomRoute extends Route {
  component?: TRouteComponent
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
  icon?: React.FC
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
    component: MainPage,
    withAuth: true,
    withMenu: true,
  },
]

export const UNKNOWN_ROUTE: Omit<ICustomRoute, 'path'> = {
  name: constants.UNKNOWN_ROUTE,
  component: NotFoundPage as TRouteComponent,
}
