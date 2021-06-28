import React, { FC } from 'react'

const IconAirlineSeatIndividualSuite: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.66666 8.66663C5.76666 8.66663 6.66666 7.76663 6.66666 6.66663C6.66666 5.56663 5.76666 4.66663 4.66666 4.66663C3.56666 4.66663 2.66666 5.56663 2.66666 6.66663C2.66666 7.76663 3.56666 8.66663 4.66666 8.66663ZM12.6667 4.66663H8.66666C7.93332 4.66663 7.33332 5.26663 7.33332 5.99996V9.33329H1.99999V5.33329C1.99999 4.96663 1.69999 4.66663 1.33332 4.66663C0.966656 4.66663 0.666656 4.96663 0.666656 5.33329V9.99996C0.666656 10.7333 1.26666 11.3333 1.99999 11.3333H14C14.7333 11.3333 15.3333 10.7333 15.3333 9.99996V7.33329C15.3333 5.85996 14.14 4.66663 12.6667 4.66663Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconAirlineSeatIndividualSuite }
