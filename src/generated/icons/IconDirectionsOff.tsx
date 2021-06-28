import React, { FC } from 'react'

const IconDirectionsOff: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.4733 7.52667L8.47334 1.52667C8.21334 1.26667 7.79334 1.26667 7.53334 1.52667L5.47334 3.58667L8.66668 6.78V5L10.7667 7.1C10.9 7.23333 10.9 7.44 10.7667 7.57333L10.1133 8.22667L12.4133 10.5267L14.4733 8.46667C14.7267 8.21333 14.7267 7.79333 14.4733 7.52667Z" fill="currentColor"/>
<path d="M4.52667 4.52669L2.34 2.34002C2.08 2.08002 1.66 2.08002 1.4 2.34002C1.14 2.60002 1.14 3.02002 1.4 3.28002L3.58667 5.46669L1.52667 7.52669C1.26667 7.78669 1.26667 8.20669 1.52667 8.46669L7.52667 14.4667C7.78667 14.7267 8.20667 14.7267 8.46667 14.4667L10.5267 12.4067L12.7133 14.5934C12.9733 14.8534 13.3933 14.8534 13.6533 14.5934C13.9133 14.3334 13.9133 13.9134 13.6533 13.6534L4.52667 4.52669ZM6.66 9.33335C6.66 9.70002 6.36 10 5.99334 10C5.62667 10 5.32667 9.70002 5.32667 9.33335V7.33335C5.32667 7.30002 5.34 7.26669 5.34667 7.23335L6.66 8.54669V9.33335Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconDirectionsOff }
