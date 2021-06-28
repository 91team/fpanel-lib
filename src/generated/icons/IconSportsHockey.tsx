import React, { FC } from 'react'

const IconSportsHockey: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.33334 11.3334V13.3334H2.66667V10.6667H2C1.63334 10.6667 1.33334 10.9667 1.33334 11.3334Z" fill="currentColor"/>
<path d="M6 10.6666H3.33334V13.3333L6.46 13.3266C6.71334 13.3266 6.94 13.1866 7.05334 12.96L7.63334 11.6933L6.57334 9.37329L6 10.6666Z" fill="currentColor"/>
<path d="M14.4733 10.8601C14.3533 10.7401 14.1867 10.6667 14 10.6667H13.3333V13.3334H14.6667V11.3334C14.6667 11.1467 14.5933 10.9801 14.4733 10.8601Z" fill="currentColor"/>
<path d="M9.06667 8.56008L11.7667 2.66675H9.53334L8.36 5.31341L8.03334 6.04675L8 6.14008L6.46667 2.66675H4.23334L6.93334 8.56008L7.94667 10.7734L8 10.8934L8.94667 12.9601C9.06 13.1867 9.28667 13.3267 9.54 13.3267L12.6667 13.3334V10.6667H10L9.06667 8.56008Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSportsHockey }
