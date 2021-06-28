import React, { FC } from 'react'

const IconDomainVerification: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.81999 10.5534C7.07999 10.8134 7.49999 10.8134 7.75999 10.5534L10.5867 7.72669C10.8467 7.46669 10.8467 7.04669 10.5867 6.78002C10.3267 6.52002 9.90666 6.52002 9.64666 6.78002L7.28666 9.13336L6.34666 8.19336C6.08666 7.93336 5.66666 7.93336 5.39999 8.19336C5.13333 8.45336 5.13999 8.87336 5.39999 9.13336L6.81999 10.5534Z" fill="currentColor"/>
<path d="M12.6667 2.66669H3.33333C2.59333 2.66669 2 3.26669 2 4.00002V12C2 12.7334 2.59333 13.3334 3.33333 13.3334H12.6667C13.4 13.3334 14 12.7334 14 12V4.00002C14 3.26669 13.4067 2.66669 12.6667 2.66669ZM12.6667 11.3334C12.6667 11.7 12.3667 12 12 12H4C3.63333 12 3.33333 11.7 3.33333 11.3334V5.33335H12.6667V11.3334Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconDomainVerification }
