import React, { FC } from 'react'

const IconInsertEmoticon: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99334 1.33334C4.31334 1.33334 1.33334 4.32001 1.33334 8.00001C1.33334 11.68 4.31334 14.6667 7.99334 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8.00001C14.6667 4.32001 11.68 1.33334 7.99334 1.33334ZM8.00001 13.3333C5.05334 13.3333 2.66668 10.9467 2.66668 8.00001C2.66668 5.05334 5.05334 2.66668 8.00001 2.66668C10.9467 2.66668 13.3333 5.05334 13.3333 8.00001C13.3333 10.9467 10.9467 13.3333 8.00001 13.3333ZM10.3333 7.33334C10.8867 7.33334 11.3333 6.88668 11.3333 6.33334C11.3333 5.78001 10.8867 5.33334 10.3333 5.33334C9.78001 5.33334 9.33334 5.78001 9.33334 6.33334C9.33334 6.88668 9.78001 7.33334 10.3333 7.33334ZM5.66668 7.33334C6.22001 7.33334 6.66668 6.88668 6.66668 6.33334C6.66668 5.78001 6.22001 5.33334 5.66668 5.33334C5.11334 5.33334 4.66668 5.78001 4.66668 6.33334C4.66668 6.88668 5.11334 7.33334 5.66668 7.33334ZM8.00001 11.6667C9.35334 11.6667 10.5333 10.9267 11.1667 9.83334C11.2933 9.61334 11.1333 9.33334 10.8733 9.33334H5.12668C4.87334 9.33334 4.70668 9.61334 4.83334 9.83334C5.46668 10.9267 6.64668 11.6667 8.00001 11.6667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconInsertEmoticon }
