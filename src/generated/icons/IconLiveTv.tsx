import React, { FC } from 'react'

const IconLiveTv: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.99999 11.4333L9.65332 9.91334C10.1 9.66001 10.1 9.01334 9.65332 8.75334L6.99999 7.23334C6.55332 6.98001 5.99999 7.30668 5.99999 7.81334V10.8467C5.99999 11.36 6.55332 11.6867 6.99999 11.4333ZM14 4.00001H8.93999L10.9 2.04001C11.0333 1.90667 11.0333 1.70001 10.9 1.56667C10.7667 1.43334 10.56 1.43334 10.4267 1.56667L7.99999 3.99334L5.57332 1.56667C5.43999 1.43334 5.23332 1.43334 5.09999 1.56667C4.96666 1.70001 4.96666 1.90667 5.09999 2.04001L7.05999 4.00001H1.99999C1.26666 4.00001 0.666656 4.59334 0.666656 5.33334V13.3333C0.666656 14.0667 1.26666 14.6667 1.99999 14.6667H14C14.7333 14.6667 15.3333 14.0667 15.3333 13.3333V5.33334C15.3333 4.59334 14.7333 4.00001 14 4.00001ZM13.3333 13.3333H2.66666C2.29999 13.3333 1.99999 13.0333 1.99999 12.6667V6.00001C1.99999 5.63334 2.29999 5.33334 2.66666 5.33334H13.3333C13.7 5.33334 14 5.63334 14 6.00001V12.6667C14 13.0333 13.7 13.3333 13.3333 13.3333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconLiveTv }
