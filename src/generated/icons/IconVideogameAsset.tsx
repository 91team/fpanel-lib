import React, { FC } from 'react'

const IconVideogameAsset: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 4H2C1.26666 4 0.666664 4.6 0.666664 5.33333V10.6667C0.666664 11.4 1.26666 12 2 12H14C14.7333 12 15.3333 11.4 15.3333 10.6667V5.33333C15.3333 4.6 14.7333 4 14 4ZM6.66666 8.66667H5.33333V10C5.33333 10.3667 5.03333 10.6667 4.66666 10.6667C4.3 10.6667 4 10.3667 4 10V8.66667H2.66666C2.3 8.66667 2 8.36667 2 8C2 7.63333 2.3 7.33333 2.66666 7.33333H4V6C4 5.63333 4.3 5.33333 4.66666 5.33333C5.03333 5.33333 5.33333 5.63333 5.33333 6V7.33333H6.66666C7.03333 7.33333 7.33333 7.63333 7.33333 8C7.33333 8.36667 7.03333 8.66667 6.66666 8.66667ZM10.3333 10C9.78 10 9.33333 9.55333 9.33333 9C9.33333 8.44667 9.78 8 10.3333 8C10.8867 8 11.3333 8.44667 11.3333 9C11.3333 9.55333 10.8867 10 10.3333 10ZM13 8C12.4467 8 12 7.55333 12 7C12 6.44667 12.4467 6 13 6C13.5533 6 14 6.44667 14 7C14 7.55333 13.5533 8 13 8Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconVideogameAsset }
