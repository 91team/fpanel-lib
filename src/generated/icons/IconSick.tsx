import React, { FC } from 'react'

const IconSick: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.3333 4.66659C15.3333 5.39992 14.7333 5.99992 14 5.99992C13.2667 5.99992 12.6667 5.39992 12.6667 4.66659C12.6667 4.14659 13.3267 3.03992 13.72 2.42659C13.8533 2.21992 14.1467 2.21992 14.28 2.42659C14.6733 3.03992 15.3333 4.14659 15.3333 4.66659ZM14.5733 6.91992C14.6267 7.27325 14.6667 7.63325 14.6667 7.99992C14.6667 11.6799 11.68 14.6666 7.99334 14.6666C4.31334 14.6666 1.33334 11.6799 1.33334 7.99992C1.33334 4.31992 4.31334 1.33325 7.99334 1.33325C9.62667 1.33325 11.12 1.91992 12.28 2.89325C11.94 3.52659 11.6667 4.17992 11.6667 4.66659C11.6667 5.95325 12.7133 6.99992 14 6.99992C14.2 6.99992 14.3867 6.96659 14.5733 6.91992ZM9.35334 6.68659L10.06 7.39325C10.2533 7.58659 10.5733 7.58659 10.7667 7.39325C10.96 7.19992 10.96 6.87992 10.7667 6.68659L10.4133 6.33325L10.7667 5.97992C10.96 5.78659 10.96 5.46659 10.7667 5.27325C10.5733 5.07992 10.2533 5.07992 10.06 5.27325L9.35334 5.97992C9.16 6.17325 9.16 6.49325 9.35334 6.68659ZM5.58667 6.33325L5.23334 6.68659C5.04 6.87992 5.04 7.19992 5.23334 7.39325C5.42667 7.58659 5.74667 7.58659 5.94 7.39325L6.64667 6.68659C6.84 6.49325 6.84 6.17325 6.64667 5.97992L5.94 5.27325C5.74667 5.07992 5.42667 5.07992 5.23334 5.27325C5.04 5.46659 5.04 5.78659 5.23334 5.97992L5.58667 6.33325ZM10.98 10.5333C10.3133 9.60659 9.23334 8.99992 8 8.99992C7.42 8.99992 6.87334 9.13325 6.38 9.37325L3.99334 7.99992C3.99334 7.65325 3.82 7.31992 3.5 7.13992C2.96667 6.83325 2.27334 7.06659 2.05334 7.67325C1.91334 8.05325 2.03334 8.50659 2.34667 8.76659C2.69334 9.05992 3.14667 9.06659 3.49334 8.87325L5.47334 10.0199C5.30667 10.1799 5.15334 10.3533 5.02 10.5399C4.78 10.8666 5.02 11.3333 5.43334 11.3333C5.58667 11.3333 5.74 11.2666 5.83334 11.1333C6.31334 10.4533 7.1 9.99992 8 9.99992C8.9 9.99992 9.68667 10.4533 10.1667 11.1333C10.26 11.2599 10.4067 11.3333 10.5667 11.3333C10.98 11.3333 11.22 10.8666 10.98 10.5333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSick }
