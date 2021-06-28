import React, { FC } from 'react'

const IconRedo: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.2667 7.06665C11.0333 5.99331 9.43333 5.33331 7.66666 5.33331C4.89333 5.33331 2.50666 6.94665 1.37333 9.28665C1.16 9.73331 1.4 10.2666 1.87333 10.4266C2.26666 10.56 2.69333 10.3733 2.87333 9.99998C3.74 8.22665 5.56 6.99998 7.66666 6.99998C8.96666 6.99998 10.1533 7.47998 11.08 8.25331L9.80666 9.52665C9.38666 9.94665 9.68 10.6666 10.2733 10.6666H14C14.3667 10.6666 14.6667 10.3666 14.6667 9.99998V6.27331C14.6667 5.67998 13.9467 5.37998 13.5267 5.79998L12.2667 7.06665Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconRedo }
