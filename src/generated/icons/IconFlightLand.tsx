import React, { FC } from 'react'

const IconFlightLand: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.6667 12.6667H2.33334C1.96667 12.6667 1.66667 12.9667 1.66667 13.3334C1.66667 13.7001 1.96667 14.0001 2.33334 14.0001H13.6667C14.0333 14.0001 14.3333 13.7001 14.3333 13.3334C14.3333 12.9667 14.0333 12.6667 13.6667 12.6667ZM2.34001 7.74007L12.8933 10.5667C13.4267 10.7067 13.9733 10.3934 14.12 9.86007C14.26 9.32674 13.9467 8.78007 13.4133 8.63341L9.87334 7.68674L8.15334 2.05341C8.08 1.81341 7.89334 1.63341 7.65334 1.56674C7.2 1.44674 6.75334 1.78674 6.75334 2.26007V6.84674L3.43334 5.96674L2.93334 4.72674C2.85334 4.53341 2.69334 4.38674 2.48667 4.33341L2.26667 4.27341C2.05334 4.21341 1.84667 4.37341 1.84667 4.59341V7.09341C1.84667 7.40007 2.04667 7.66007 2.34001 7.74007Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconFlightLand }
