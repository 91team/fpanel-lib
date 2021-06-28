import React, { FC } from 'react'

const IconNote: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2733 6.27341L11.0533 3.05341C10.8067 2.80675 10.4667 2.66675 10.1133 2.66675H2.66668C1.93334 2.66675 1.33334 3.26675 1.33334 4.00008V12.0067C1.33334 12.7401 1.92668 13.3334 2.66001 13.3334H13.3333C14.0667 13.3334 14.6667 12.7334 14.6667 12.0001V7.22008C14.6667 6.86675 14.5267 6.52675 14.2733 6.27341ZM10 3.66675L13.6667 7.33341H10.6667C10.3 7.33341 10 7.03341 10 6.66675V3.66675Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconNote }
