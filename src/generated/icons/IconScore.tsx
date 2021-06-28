import React, { FC } from 'react'

const IconScore: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6667 2H3.33333C2.6 2 2 2.6 2 3.33333V12.6667C2 13.4 2.6 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V3.33333C14 2.6 13.4 2 12.6667 2ZM8 3.83333C8 3.56 8.22667 3.33333 8.5 3.33333C8.77333 3.33333 9 3.56 9 3.83333V5.33333L10.1933 3.54C10.28 3.41333 10.4267 3.33333 10.5867 3.33333C10.96 3.33333 11.1867 3.75333 10.98 4.06667L10.1333 5.33333L10.98 6.6C11.1867 6.91333 10.9667 7.33333 10.5867 7.33333C10.4267 7.33333 10.28 7.25333 10.1933 7.12667L9 5.33333V6.83333C9 7.10667 8.77333 7.33333 8.5 7.33333C8.22667 7.33333 8 7.10667 8 6.83333V3.83333ZM4.66667 5.5C4.66667 5.13333 4.96667 4.83333 5.33333 4.83333H6.33333V4.33333H5.16667C4.89333 4.33333 4.66667 4.10667 4.66667 3.83333C4.66667 3.56 4.89333 3.33333 5.16667 3.33333H6.66667C7.03333 3.33333 7.33333 3.63333 7.33333 4V5.16667C7.33333 5.53333 7.03333 5.83333 6.66667 5.83333H5.66667V6.33333H6.83333C7.10667 6.33333 7.33333 6.56 7.33333 6.83333C7.33333 7.10667 7.10667 7.33333 6.83333 7.33333H5.33333C4.96667 7.33333 4.66667 7.03333 4.66667 6.66667V5.5ZM12.4933 8.84L9.14 12.1933C8.88 12.4533 8.46 12.4533 8.2 12.1933L6 10L4.34 11.66C3.96667 12.0333 3.33333 11.7667 3.33333 11.2467C3.33333 11.0933 3.39333 10.94 3.50667 10.8333L5.52667 8.81333C5.78667 8.55333 6.20667 8.55333 6.46667 8.81333L8.66667 11L11.66 8.00667C12.0333 7.63333 12.6667 7.9 12.6667 8.42C12.6667 8.58 12.6067 8.72667 12.4933 8.84Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconScore }
