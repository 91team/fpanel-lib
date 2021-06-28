import React, { FC } from 'react'

const IconGroups: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 8.5C9.08667 8.5 10.0467 8.76 10.8267 9.1C11.5467 9.42 12 10.14 12 10.92V11.3333C12 11.7 11.7 12 11.3333 12H4.66667C4.3 12 4 11.7 4 11.3333V10.9267C4 10.14 4.45333 9.42 5.17333 9.10667C5.95333 8.76 6.91333 8.5 8 8.5ZM2.66667 8.66667C3.4 8.66667 4 8.06667 4 7.33333C4 6.6 3.4 6 2.66667 6C1.93333 6 1.33333 6.6 1.33333 7.33333C1.33333 8.06667 1.93333 8.66667 2.66667 8.66667ZM3.42 9.4C3.17333 9.36 2.92667 9.33333 2.66667 9.33333C2.00667 9.33333 1.38 9.47333 0.813333 9.72C0.32 9.93333 0 10.4133 0 10.9533V11.3333C0 11.7 0.3 12 0.666667 12H3V10.9267C3 10.3733 3.15333 9.85333 3.42 9.4ZM13.3333 8.66667C14.0667 8.66667 14.6667 8.06667 14.6667 7.33333C14.6667 6.6 14.0667 6 13.3333 6C12.6 6 12 6.6 12 7.33333C12 8.06667 12.6 8.66667 13.3333 8.66667ZM16 10.9533C16 10.4133 15.68 9.93333 15.1867 9.72C14.62 9.47333 13.9933 9.33333 13.3333 9.33333C13.0733 9.33333 12.8267 9.36 12.58 9.4C12.8467 9.85333 13 10.3733 13 10.9267V12H15.3333C15.7 12 16 11.7 16 11.3333V10.9533ZM8 4C9.10667 4 10 4.89333 10 6C10 7.10667 9.10667 8 8 8C6.89333 8 6 7.10667 6 6C6 4.89333 6.89333 4 8 4Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconGroups }
