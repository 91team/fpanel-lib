import React, { FC } from 'react'

const IconVerified: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.3334 8L13.7067 6.14L13.9334 3.68L11.5267 3.13333L10.2667 1L8.00002 1.97333L5.73335 1L4.47335 3.12667L2.06669 3.66667L2.29335 6.13333L0.666687 8L2.29335 9.86L2.06669 12.3267L4.47335 12.8733L5.73335 15L8.00002 14.02L10.2667 14.9933L11.5267 12.8667L13.9334 12.32L13.7067 9.86L15.3334 8ZM6.25335 10.6733L4.66669 9.07333C4.40669 8.81333 4.40669 8.39333 4.66669 8.13333L4.71335 8.08667C4.97335 7.82667 5.40002 7.82667 5.66002 8.08667L6.73335 9.16667L10.1667 5.72667C10.4267 5.46667 10.8534 5.46667 11.1134 5.72667L11.16 5.77333C11.42 6.03333 11.42 6.45333 11.16 6.71333L7.21335 10.6733C6.94002 10.9333 6.52002 10.9333 6.25335 10.6733Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconVerified }
