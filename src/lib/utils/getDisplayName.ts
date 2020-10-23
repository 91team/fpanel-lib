import { ComponentType } from 'react'

import { ENVIROMENT } from '../services/app'

export function getDisplayName(component: ComponentType<any>) {
  return process.env.NODE_ENV === ENVIROMENT.DEVELOPMENT
    ? component.displayName ||
        component.name ||
        (component.constructor && component.constructor.name) ||
        'Component'
    : ''
}
