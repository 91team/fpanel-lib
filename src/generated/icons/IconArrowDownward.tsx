import React, { FC } from 'react'

const IconArrowDownward: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.33332 3.33329V10.78L4.07999 7.52663C3.81999 7.26663 3.39332 7.26663 3.13332 7.52663C2.87332 7.78663 2.87332 8.20663 3.13332 8.46663L7.52666 12.86C7.78666 13.12 8.20666 13.12 8.46666 12.86L12.86 8.46663C13.12 8.20663 13.12 7.78663 12.86 7.52663C12.6 7.26663 12.18 7.26663 11.92 7.52663L8.66666 10.78V3.33329C8.66666 2.96663 8.36666 2.66663 7.99999 2.66663C7.63332 2.66663 7.33332 2.96663 7.33332 3.33329Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconArrowDownward }
