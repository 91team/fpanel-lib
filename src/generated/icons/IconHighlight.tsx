import React, { FC } from 'react'

const IconHighlight: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.19333 9.52668L6 11.3333V14C6 14.3667 6.3 14.6667 6.66666 14.6667H9.33333C9.7 14.6667 10 14.3667 10 14V11.3333L11.8067 9.52668C11.9333 9.40001 12 9.23334 12 9.05334V6.66668C12 6.30001 11.7 6.00001 11.3333 6.00001H4.66666C4.3 6.00001 4 6.30001 4 6.66668V9.06001C4 9.23334 4.07333 9.40668 4.19333 9.52668ZM8 1.33334C8.36666 1.33334 8.66666 1.63334 8.66666 2.00001V2.66668C8.66666 3.03334 8.36666 3.33334 8 3.33334C7.63333 3.33334 7.33333 3.03334 7.33333 2.66668V2.00001C7.33333 1.63334 7.63333 1.33334 8 1.33334ZM2.80666 3.44668C3.06666 3.18668 3.48666 3.18668 3.75333 3.44668L4.22666 3.92001C4.48666 4.18001 4.48666 4.60001 4.22666 4.86001C3.96666 5.12001 3.54666 5.12001 3.28666 4.86001L2.80666 4.38668C2.54666 4.12668 2.54666 3.70668 2.80666 3.44668ZM11.78 3.92001L12.2533 3.44668C12.5133 3.18668 12.9333 3.18668 13.1933 3.44668C13.4533 3.70668 13.4533 4.12668 13.1933 4.38668L12.72 4.86001C12.46 5.12001 12.04 5.12001 11.78 4.86001C11.52 4.60001 11.52 4.18001 11.78 3.92001Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconHighlight }
