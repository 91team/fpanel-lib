import React, { FC } from 'react'

import { observer } from 'mobx-react'

import styles from './styles.module.scss'

const MainPage: FC<{}> = observer(() => <div className={styles.container}>Main Page</div>)

export { MainPage }
