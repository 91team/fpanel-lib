import React, { FC } from 'react'

const IconTransitEnterexit: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.66667 12H5.33333C4.6 12 4 11.4 4 10.6666V6.3333C4 5.77997 4.44667 5.3333 5 5.3333C5.55333 5.3333 6 5.77997 6 6.3333V8.5133L9.96667 4.66664C10.3467 4.29997 10.9533 4.30664 11.3267 4.67997C11.7 5.0533 11.7 5.65997 11.3333 6.03997L7.43333 9.99997H9.66667C10.22 9.99997 10.6667 10.4466 10.6667 11C10.6667 11.5533 10.22 12 9.66667 12Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconTransitEnterexit }
