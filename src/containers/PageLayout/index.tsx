import React, { FC } from 'react'

import withStyles, { WithStylesProps } from 'HOCs/withStyles'

import styles from './styles'

type TOuterProps = {}
type TProps = TOuterProps & WithStylesProps<typeof styles>

const Layout: FC<TProps> = ({ classes, children }) => (
  <section className={classes.layout}>{children}</section>
)

export default withStyles<TOuterProps, typeof styles>(styles)(Layout)
