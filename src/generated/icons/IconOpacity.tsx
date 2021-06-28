import React, { FC } from 'react'

const IconOpacity: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.7733 5.3333L8.47334 2.03997C8.21334 1.77997 7.79334 1.77997 7.53334 2.03997L4.22667 5.3333C3.18667 6.3733 2.66667 7.75997 2.66667 9.0933C2.66667 10.4266 3.18667 11.8333 4.22667 12.8733C5.26667 13.9133 6.63334 14.44 8 14.44C9.36667 14.44 10.7333 13.9133 11.7733 12.8733C12.8133 11.8333 13.3333 10.4266 13.3333 9.0933C13.3333 7.75997 12.8133 6.3733 11.7733 5.3333ZM4.00001 9.3333C4.00667 7.99997 4.41334 7.1533 5.17334 6.39997L8 3.5133L10.8267 6.4333C11.5867 7.17997 11.9933 7.99997 12 9.3333H4.00001Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconOpacity }
