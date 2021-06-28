import React, { FC } from 'react'

const IconNearMe: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 2.62669L2.71333 6.72002C2.15999 6.95335 2.17333 7.74002 2.72666 7.95335L6.28666 9.33335C6.45999 9.40002 6.59999 9.54002 6.66666 9.71335L8.03999 13.2667C8.25332 13.8267 9.04666 13.84 9.27999 13.2867L13.38 3.50669C13.6 2.95335 13.0467 2.40002 12.5 2.62669Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconNearMe }
