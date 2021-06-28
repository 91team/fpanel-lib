import React, { FC } from 'react'

const IconBrightness3: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.58 6.91331C12.08 3.73998 9.24668 1.34665 6.03335 1.33331C5.70668 1.33331 5.38668 1.35331 5.07335 1.39998C4.74002 1.44665 4.67335 1.88665 4.98002 2.03998C7.16668 3.12665 8.66668 5.38665 8.66668 7.99998C8.66668 10.6133 7.16668 12.8733 4.98002 13.9666C4.68002 14.12 4.74002 14.56 5.07335 14.6066C5.38668 14.6466 5.70668 14.6666 6.03335 14.6666C9.24668 14.6533 12.08 12.26 12.58 9.08665C12.64 8.71998 12.6533 8.35998 12.6533 7.99998C12.6533 7.63998 12.64 7.27998 12.58 6.91331Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconBrightness3 }
