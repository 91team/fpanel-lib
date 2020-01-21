import React, { FC } from 'react'
import withStyles, { JSSProps } from 'react-jss'

import styles from './styles'

type TOuterProps = {}
type TProps = TOuterProps & JSSProps<typeof styles>

const Layout: FC<TProps> = ({ classes, children }) => (
  <section className={classes.layout}>{children}</section>
)

export default withStyles<TOuterProps>(styles)(Layout)
