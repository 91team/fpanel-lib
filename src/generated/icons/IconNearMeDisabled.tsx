import React, { FC } from 'react'

const IconNearMeDisabled: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 4.22662L12.6333 2.50662C13.1667 2.30662 13.6867 2.82662 13.4933 3.36662L11.7733 7.99996L8 4.22662ZM14.6 12.7133L3.28667 1.39996C3.02667 1.13996 2.60667 1.13996 2.34667 1.39996C2.08667 1.65996 2.08667 2.07996 2.34667 2.33996L5.25333 5.24662L2.45333 6.28662C2.18 6.39329 2 6.64662 2 6.93329C2 7.21329 2.17333 7.46662 2.43333 7.57329L6.71333 9.28662L8.42667 13.5666C8.53333 13.8266 8.78667 14 9.06667 14C9.35333 14 9.61333 13.82 9.71333 13.5533L10.7533 10.7533L13.66 13.66C13.92 13.92 14.34 13.92 14.6 13.66C14.86 13.3933 14.86 12.9733 14.6 12.7133Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconNearMeDisabled }
