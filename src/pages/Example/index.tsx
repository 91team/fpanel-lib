import React, { FC, useEffect } from 'react'

import { observer } from 'mobx-react'
import { createUseStyles } from 'react-jss'

import { TBaseSubControllersProps } from 'lib/utils/controllerHelpersBuilder/HOCs/createWithSubControllers'

import withStyles, { TWithStylesProps } from 'lib/HOCs/withStyles'

import {
  ExamplePageController,
  applyController,
  useController,
  useSubControllers,
  withSubControllers,
} from './controller'

import { FirstSubController } from './controller/subControllers'
import { FirstSubSubController } from './controller/subControllers/firstSubController/subControllers/firstSubSubController'

import compose from 'utils/compose'

import useServices from 'hooks/useServices'

import styles from './styles'

// const useStyles = createUseStyles(styles)

type TOuterProps = {}
type TSubControllers = {
  [FirstSubController.NAME]: FirstSubController
  [FirstSubSubController.NAME]: FirstSubSubController
}
type TStateProps = TBaseSubControllersProps<TSubControllers>
type TProps = TOuterProps & TStateProps & TWithStylesProps<typeof styles>

const ExamplePage: FC<TProps> = ({
  subControllers: {
    [FirstSubController.NAME]: firstSubController,
    [FirstSubSubController.NAME]: firstSubSubController,
  },
  classes,
}) => {
  // const classes = useStyles()
  const services = useServices()
  const controller = useController()
  const { initialize, destroy } = controller
  // const {
  //   [FirstSubController.NAME]: firstSubController,
  //   [FirstSubSubController.NAME]: firstSubSubController,
  // } = useSubControllers<TSubControllers>([
  //   FirstSubController,
  //   FirstSubSubController,
  // ])

  useEffect(() => {
    initialize(services)

    return destroy
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log('firstSubSubController:', firstSubSubController)

  return (
    <div className={classes.container}>
      <div className={classes.title}>Example</div>
      {firstSubController && (
        <button onClick={firstSubController.onButtonClick}>toggle firstSubSubcontroller</button>
      )}
    </div>
  )
}

export default compose(
  applyController(ExamplePageController),
  withSubControllers([FirstSubController, FirstSubSubController]),
  withStyles(styles),
  observer
)(ExamplePage)
