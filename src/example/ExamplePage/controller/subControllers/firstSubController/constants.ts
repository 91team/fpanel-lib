import { NAME as PARENT_NAME } from '../../constants'

import { formatSubControllerName } from 'utils/formatters/nameSubControllers'

export const NAME = formatSubControllerName(PARENT_NAME, 'first') as 'FirstSubController'
