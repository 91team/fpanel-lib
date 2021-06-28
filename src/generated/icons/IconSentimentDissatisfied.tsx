import React, { FC } from 'react'

const IconSentimentDissatisfied: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.3333 7.33325C10.8856 7.33325 11.3333 6.88554 11.3333 6.33325C11.3333 5.78097 10.8856 5.33325 10.3333 5.33325C9.78106 5.33325 9.33334 5.78097 9.33334 6.33325C9.33334 6.88554 9.78106 7.33325 10.3333 7.33325Z" fill="currentColor"/>
<path d="M5.66666 7.33325C6.21894 7.33325 6.66666 6.88554 6.66666 6.33325C6.66666 5.78097 6.21894 5.33325 5.66666 5.33325C5.11437 5.33325 4.66666 5.78097 4.66666 6.33325C4.66666 6.88554 5.11437 7.33325 5.66666 7.33325Z" fill="currentColor"/>
<path d="M7.99334 1.33325C4.31334 1.33325 1.33334 4.31992 1.33334 7.99992C1.33334 11.6799 4.31334 14.6666 7.99334 14.6666C11.68 14.6666 14.6667 11.6799 14.6667 7.99992C14.6667 4.31992 11.68 1.33325 7.99334 1.33325ZM8.00001 13.3333C5.05334 13.3333 2.66668 10.9466 2.66668 7.99992C2.66668 5.05325 5.05334 2.66659 8.00001 2.66659C10.9467 2.66659 13.3333 5.05325 13.3333 7.99992C13.3333 10.9466 10.9467 13.3333 8.00001 13.3333ZM8.00001 9.33325C6.73334 9.33325 5.58001 9.97992 4.90001 11.0533C4.75334 11.2866 4.82668 11.5933 5.06001 11.7399C5.29334 11.8866 5.60001 11.8133 5.74668 11.5799C6.24001 10.7933 7.08001 10.3266 8.00001 10.3266C8.92001 10.3266 9.76001 10.7933 10.2533 11.5799C10.3467 11.7333 10.5133 11.8133 10.68 11.8133C10.7733 11.8133 10.86 11.7866 10.9467 11.7399C11.18 11.5933 11.2533 11.2866 11.1067 11.0533C10.42 9.97325 9.26668 9.33325 8.00001 9.33325Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSentimentDissatisfied }
