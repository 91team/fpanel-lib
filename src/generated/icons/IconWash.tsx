import React, { FC } from 'react'

const IconWash: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.29332 7.86006C0.893323 8.23339 0.666656 8.76006 0.666656 9.31339V13.3334C0.666656 14.4401 1.55999 15.3334 2.66666 15.3334H11.7867C12.22 15.3334 12.62 15.0201 12.6667 14.5867C12.72 14.0867 12.3267 13.6667 11.84 13.6667H8.33332C8.14666 13.6667 7.99999 13.5201 7.99999 13.3334C7.99999 13.1467 8.14666 13.0001 8.33332 13.0001H13.12C13.5533 13.0001 13.9533 12.6867 14 12.2534C14.0533 11.7534 13.66 11.3334 13.1733 11.3334H8.33332C8.14666 11.3334 7.99999 11.1867 7.99999 11.0001C7.99999 10.8134 8.14666 10.6667 8.33332 10.6667H13.7867C14.22 10.6667 14.62 10.3534 14.6667 9.92006C14.72 9.42006 14.3267 9.00006 13.84 9.00006H8.33332C8.14666 9.00006 7.99999 8.85339 7.99999 8.66672C7.99999 8.48006 8.14666 8.33339 8.33332 8.33339H12.4533C12.8867 8.33339 13.2867 8.02006 13.3333 7.58672C13.3867 7.08672 12.9933 6.66672 12.5067 6.66672H5.90666L6.89999 4.92672C6.95999 4.82006 6.99332 4.70672 6.99332 4.57339C6.99332 4.40006 6.93332 4.24006 6.81999 4.10672L6.53999 3.80672C6.28666 3.54672 5.86666 3.53339 5.59999 3.78672L1.29332 7.86006ZM12.3333 5.33339C13.2533 5.33339 14 4.58672 14 3.66672C14 2.83339 13.06 1.56006 12.5933 0.973389C12.46 0.806722 12.2133 0.806722 12.08 0.973389C11.6067 1.56006 10.6667 2.83339 10.6667 3.66672C10.6667 4.58672 11.4133 5.33339 12.3333 5.33339ZM8.99999 6.00006C9.55332 6.00006 9.99999 5.55339 9.99999 5.00006C9.99999 4.62672 9.55332 4.00672 9.25999 3.64006C9.12666 3.47339 8.87332 3.47339 8.74666 3.64006C8.44666 4.00672 7.99999 4.62672 7.99999 5.00006C7.99999 5.55339 8.44666 6.00006 8.99999 6.00006Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconWash }
