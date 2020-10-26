import React, { FC, SVGAttributes, memo } from 'react'

import LoadingIcon from 'assets/images/sprite/loading.svg'

export interface OuterProps extends SVGAttributes<SVGSVGElement> {
  loading?: boolean
}
interface Props extends OuterProps {}

const IconBaseBuilder = (
  icon: { id: string },
  defaultProps: OuterProps = {}
): FC<Props> =>
  memo(({ loading = false, ...props }) => (
    <svg {...defaultProps} {...props}>
      <use xlinkHref={`#${loading ? LoadingIcon.id : icon.id}`} />
    </svg>
  ))

export default IconBaseBuilder
