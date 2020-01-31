import { Classes } from 'jss'
import {
  createUseStyles as defaultCreateUseStyles,
  CreateUseStylesOptions
} from 'react-jss'

export default function createUseStyles<S>(
  styles: S,
  options?: CreateUseStylesOptions
) {
  const useStyles = defaultCreateUseStyles(styles, options)

  return (data?: unknown) =>
    useStyles(data) as S extends ((theme: any) => any)
      ? Classes<keyof ReturnType<S>>
      : Classes<keyof S>
}
