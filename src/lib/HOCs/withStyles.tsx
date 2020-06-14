import React, {
  useMemo,
  forwardRef,
  useContext,
  ComponentType,
  FC,
  RefObject
} from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import { Classes, Styles } from 'jss'
import { ThemeContext as DefaultThemeContext } from 'theming'
import { createUseStyles, WithStylesOptions } from 'react-jss'

function mergeClasses(baseClasses: Classes, additionalClasses: Classes) {
  const combinedClasses = { ...baseClasses }

  for (const name in additionalClasses) {
    combinedClasses[name] =
      name in combinedClasses
        ? `${combinedClasses[name]} ${additionalClasses[name]}`
        : additionalClasses[name]
  }

  return combinedClasses
}
function getDisplayName(Component: ComponentType<{}>) {
  return process.env.NODE_ENV === 'development'
    ? Component.displayName || Component.name || 'Component'
    : 'c'
}

const NoRenderer: FC<{}> = props => <>{props.children || null}</>

export interface HOCProps {
  ref: RefObject<any>
  classes: Classes
  theme?: App.TTheme
}

export interface WithStylesProps<S extends Styles | ((theme: unknown) => any)>
  extends Pick<HOCProps, 'ref' | 'theme'> {
  classes: Classes<
    S extends ((theme: unknown) => any) ? keyof ReturnType<S> : keyof S
  >
}

/**
 * HOC creator function that wrapps the user component.
 *
 * `withStyles(styles, [options])(Component)`
 */
const withStyles = <OuterProps, S extends (theme: any) => any>(
  styles: S,
  options: WithStylesOptions = {}
) => {
  type CommonProps = OuterProps & HOCProps

  const { injectTheme = false, theming, ...restOptions } = options
  const ThemeContext = (theming && theming.context) || DefaultThemeContext

  return (
    InnerComponent: ComponentType<CommonProps> = NoRenderer
  ): ComponentType<OuterProps> => {
    const displayName = getDisplayName(InnerComponent)
    const useStyles = createUseStyles<
      HOCProps['theme'],
      S extends (theme: any) => any ? keyof ReturnType<S> : keyof S
    >(styles, {
      ...restOptions,
      name: displayName,
      theming
    })

    const WithStyles = forwardRef<unknown, CommonProps>(
      ({ classes: propClasses, theme: propTheme, ...restProps }, ref) => {
        const contextTheme = useContext(ThemeContext)
        const theme = propTheme || contextTheme
        const generatedClasses = useStyles({ theme, ...restProps })
        const classes: Classes = useMemo(
          () =>
            propClasses
              ? mergeClasses(generatedClasses, propClasses)
              : generatedClasses,
          [propClasses, generatedClasses]
        )

        // @ts-ignore
        const props: CommonProps = { ref, classes, ...restProps }

        if (injectTheme) {
          props.theme = theme as App.TTheme
        }

        return <InnerComponent {...props} />
      }
    )

    // @ts-ignore
    WithStyles.defaultProps = { ...InnerComponent.defaultProps }
    WithStyles.displayName = `WithStyles(${displayName})`
    // @ts-ignore
    WithStyles.InnerComponent = InnerComponent

    return hoistNonReactStatics(WithStyles, InnerComponent)
  }
}

export default withStyles
