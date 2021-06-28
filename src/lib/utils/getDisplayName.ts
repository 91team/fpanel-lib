import { ComponentType } from 'react'

import { isDev } from 'lib/constants/env'

export function getDisplayName(component: ComponentType<any>) {
  return isDev
    ? component.displayName ||
        component.name ||
        (component.constructor && component.constructor.name) ||
        'Component'
    : ''
}
