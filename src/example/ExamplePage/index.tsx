import React, { FC, useEffect } from 'react'

import { inject, observer } from 'mobx-react'
import Head from 'next/head'
import Link from 'next/link'
import { createUseStyles } from 'react-jss'

import { TBaseSubControllersProps } from 'lib/utils/controllerHelpersBuilder/HOCs/createWithSubControllers'

import withStyles, { WithStylesProps } from 'lib/HOCs/withStyles'

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
type TProps = TOuterProps & TStateProps & WithStylesProps<typeof styles>

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
    <>
      <Head>
        <title>Пример</title>
      </Head>
      <div className={classes.container}>
        <Link href="login">
          <a>логин</a>
        </Link>
        {firstSubController && (
          <button onClick={firstSubController.onButtonClick}>
            toggle firstSubSubcontroller
          </button>
        )}
      </div>
    </>
  )
}

export default compose(
  applyController(ExamplePageController),
  withSubControllers([FirstSubController, FirstSubSubController]),
  withStyles(styles),
  observer
)(ExamplePage)
