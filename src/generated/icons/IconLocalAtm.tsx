import React, { FC } from 'react'

const IconLocalAtm: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 2.66663H2.66668C1.92668 2.66663 1.34001 3.25996 1.34001 3.99996L1.33334 12C1.33334 12.74 1.92668 13.3333 2.66668 13.3333H13.3333C14.0733 13.3333 14.6667 12.74 14.6667 12V3.99996C14.6667 3.25996 14.0733 2.66663 13.3333 2.66663ZM13.3333 11.3333C13.3333 11.7 13.0333 12 12.6667 12H3.33334C2.96668 12 2.66668 11.7 2.66668 11.3333V4.66663C2.66668 4.29996 2.96668 3.99996 3.33334 3.99996H12.6667C13.0333 3.99996 13.3333 4.29996 13.3333 4.66663V11.3333ZM9.33334 6.66663C9.70001 6.66663 10 6.36663 10 5.99996C10 5.63329 9.70001 5.33329 9.33334 5.33329H8.66668V5.32663C8.66668 4.95996 8.36668 4.65996 8.00001 4.65996C7.63334 4.65996 7.33334 4.95996 7.33334 5.32663V5.33329H6.66668C6.30001 5.33329 6.00001 5.63329 6.00001 5.99996V7.99996C6.00001 8.36663 6.30001 8.66663 6.66668 8.66663H8.66668V9.33329H6.66668C6.30001 9.33329 6.00001 9.63329 6.00001 9.99996C6.00001 10.3666 6.30001 10.6666 6.66668 10.6666H7.33334C7.33334 11.0333 7.63334 11.3333 8.00001 11.3333C8.36668 11.3333 8.66668 11.0333 8.66668 10.6666H9.33334C9.70001 10.6666 10 10.3666 10 9.99996V7.99996C10 7.63329 9.70001 7.33329 9.33334 7.33329H7.33334V6.66663H9.33334Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconLocalAtm }
