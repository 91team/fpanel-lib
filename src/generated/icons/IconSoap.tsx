import React, { FC } from 'react'

const IconSoap: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.49999 4.00008C9.77332 4.00008 9.99999 4.22675 9.99999 4.50008C9.99999 4.77341 9.77332 5.00008 9.49999 5.00008C9.22666 5.00008 8.99999 4.77341 8.99999 4.50008C8.99999 4.22675 9.22666 4.00008 9.49999 4.00008ZM9.49999 3.00008C8.67332 3.00008 7.99999 3.67341 7.99999 4.50008C7.99999 5.32675 8.67332 6.00008 9.49999 6.00008C10.3267 6.00008 11 5.32675 11 4.50008C11 3.67341 10.3267 3.00008 9.49999 3.00008ZM13.3333 3.66675C13.52 3.66675 13.6667 3.81341 13.6667 4.00008C13.6667 4.18675 13.52 4.33341 13.3333 4.33341C13.1467 4.33341 13 4.18675 13 4.00008C13 3.81341 13.1467 3.66675 13.3333 3.66675ZM13.3333 2.66675C12.6 2.66675 12 3.26675 12 4.00008C12 4.73341 12.6 5.33341 13.3333 5.33341C14.0667 5.33341 14.6667 4.73341 14.6667 4.00008C14.6667 3.26675 14.0667 2.66675 13.3333 2.66675ZM12 1.66675C12 2.22008 11.5533 2.66675 11 2.66675C10.4467 2.66675 9.99999 2.22008 9.99999 1.66675C9.99999 1.11341 10.4467 0.666748 11 0.666748C11.5533 0.666748 12 1.11341 12 1.66675ZM1.29332 7.86008C0.893323 8.23341 0.666656 8.76008 0.666656 9.31341V13.3334C0.666656 14.4401 1.55999 15.3334 2.66666 15.3334H11.7867C12.22 15.3334 12.62 15.0201 12.6667 14.5867C12.72 14.0867 12.3267 13.6667 11.84 13.6667H8.33332C8.14666 13.6667 7.99999 13.5201 7.99999 13.3334C7.99999 13.1467 8.14666 13.0001 8.33332 13.0001H13.12C13.5533 13.0001 13.9533 12.6867 14 12.2534C14.0533 11.7534 13.66 11.3334 13.1733 11.3334H8.33332C8.14666 11.3334 7.99999 11.1867 7.99999 11.0001C7.99999 10.8134 8.14666 10.6667 8.33332 10.6667H13.7867C14.22 10.6667 14.62 10.3534 14.6667 9.92008C14.72 9.42008 14.3267 9.00008 13.84 9.00008H8.33332C8.14666 9.00008 7.99999 8.85341 7.99999 8.66675C7.99999 8.48008 8.14666 8.33341 8.33332 8.33341H12.4533C12.8867 8.33341 13.2867 8.02008 13.3333 7.58675C13.3867 7.08675 12.9933 6.66675 12.5067 6.66675H5.90666L6.89999 4.92675C6.95999 4.82008 6.99332 4.70675 6.99332 4.57341C6.99332 4.40008 6.93332 4.24008 6.81999 4.10675L6.53999 3.80675C6.28666 3.54675 5.86666 3.53341 5.59999 3.78675L1.29332 7.86008Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSoap }
