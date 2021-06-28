import React, { FC } from 'react'

const IconUnfoldLess: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.41332 12.8666C5.67332 13.1266 6.09332 13.1266 6.35332 12.8666L7.99999 11.2199L9.64666 12.8666C9.90666 13.1266 10.3267 13.1266 10.5867 12.8666C10.8467 12.6066 10.8467 12.1866 10.5867 11.9266L8.47332 9.81323C8.21332 9.55323 7.79332 9.55323 7.53332 9.81323L5.41999 11.9266C5.15332 12.1799 5.15332 12.6066 5.41332 12.8666ZM10.5867 3.13323C10.3267 2.87323 9.90666 2.87323 9.64666 3.13323L7.99999 4.7799L6.35332 3.13323C6.09332 2.87323 5.67332 2.87323 5.41332 3.13323C5.15332 3.39323 5.15332 3.8199 5.41332 4.0799L7.52666 6.19323C7.78666 6.45323 8.20666 6.45323 8.46666 6.19323L10.58 4.0799C10.8467 3.8199 10.8467 3.39323 10.5867 3.13323Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconUnfoldLess }
