import React, { FC } from 'react'

const IconSettingsInputComposite: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.33334 1.33329C3.33334 0.966626 3.03334 0.666626 2.66667 0.666626C2.3 0.666626 2.00001 0.966626 2.00001 1.33329V3.99996H1.33334C0.966672 3.99996 0.666672 4.29996 0.666672 4.66663V7.99996H4.66667V4.66663C4.66667 4.29996 4.36667 3.99996 4 3.99996H3.33334V1.33329ZM6 10.6666C6 11.5333 6.56 12.2666 7.33334 12.5466V14.6666C7.33334 15.0333 7.63334 15.3333 8 15.3333C8.36667 15.3333 8.66667 15.0333 8.66667 14.6666V12.5466C9.44 12.2733 10 11.54 10 10.6666V9.33329H6V10.6666ZM0.666672 10.6666C0.666672 11.5333 1.22667 12.2666 2.00001 12.5466V14.6666C2.00001 15.0333 2.3 15.3333 2.66667 15.3333C3.03334 15.3333 3.33334 15.0333 3.33334 14.6666V12.5466C4.10667 12.2666 4.66667 11.5333 4.66667 10.6666V9.33329H0.666672V10.6666ZM14 3.99996V1.33329C14 0.966626 13.7 0.666626 13.3333 0.666626C12.9667 0.666626 12.6667 0.966626 12.6667 1.33329V3.99996H12C11.6333 3.99996 11.3333 4.29996 11.3333 4.66663V7.99996H15.3333V4.66663C15.3333 4.29996 15.0333 3.99996 14.6667 3.99996H14ZM8.66667 1.33329C8.66667 0.966626 8.36667 0.666626 8 0.666626C7.63334 0.666626 7.33334 0.966626 7.33334 1.33329V3.99996H6.66667C6.3 3.99996 6 4.29996 6 4.66663V7.99996H10V4.66663C10 4.29996 9.7 3.99996 9.33334 3.99996H8.66667V1.33329ZM11.3333 10.6666C11.3333 11.5333 11.8933 12.2666 12.6667 12.5466V14.6666C12.6667 15.0333 12.9667 15.3333 13.3333 15.3333C13.7 15.3333 14 15.0333 14 14.6666V12.5466C14.7733 12.2733 15.3333 11.54 15.3333 10.6666V9.33329H11.3333V10.6666Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSettingsInputComposite }
