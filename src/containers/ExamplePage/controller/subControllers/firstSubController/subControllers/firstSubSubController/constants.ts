import { NAME as PARENT_NAME } from '../../constants'

import { formatSubControllerName } from 'lib/utils/formatters/nameSubControllers'

export const NAME = formatSubControllerName(
  PARENT_NAME,
  'firstSub'
) as 'FirstSubSubController'
