import React, { FC } from 'react'

const IconLegendToggle: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6667 10H3.33334C2.96667 10 2.66667 9.70004 2.66667 9.33337C2.66667 8.96671 2.96667 8.66671 3.33334 8.66671H12.6667C13.0333 8.66671 13.3333 8.96671 13.3333 9.33337C13.3333 9.70004 13.0333 10 12.6667 10ZM12.6667 11.3334H3.33334C2.96667 11.3334 2.66667 11.6334 2.66667 12C2.66667 12.3667 2.96667 12.6667 3.33334 12.6667H12.6667C13.0333 12.6667 13.3333 12.3667 13.3333 12C13.3333 11.6334 13.0333 11.3334 12.6667 11.3334ZM10 7.33337L13.0533 5.16671C13.2267 5.04004 13.3333 4.84004 13.3333 4.62671C13.3333 4.08671 12.72 3.76671 12.28 4.08004L10 5.70004L6.66667 3.33337L2.98667 5.57337C2.78667 5.70004 2.66667 5.91337 2.66667 6.14671C2.66667 6.66671 3.23334 6.98671 3.68 6.71337L6.61334 4.92671L10 7.33337Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconLegendToggle }
