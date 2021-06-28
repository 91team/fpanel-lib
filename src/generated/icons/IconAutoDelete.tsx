import React, { FC } from 'react'

const IconAutoDelete: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6667 6.00016C10.2 6.00016 9.75334 6.06683 9.33334 6.1935V4.66683C9.33334 3.9335 8.73334 3.3335 8.00001 3.3335H2.66668C1.93334 3.3335 1.33334 3.9335 1.33334 4.66683V11.3335C1.33334 12.0668 1.93334 12.6668 2.66668 12.6668H6.45334C7.20001 14.2402 8.80668 15.3335 10.6667 15.3335C13.2467 15.3335 15.3333 13.2468 15.3333 10.6668C15.3333 8.08683 13.2467 6.00016 10.6667 6.00016ZM10.6667 14.0002C8.82668 14.0002 7.33334 12.5068 7.33334 10.6668C7.33334 8.82683 8.82668 7.3335 10.6667 7.3335C12.5067 7.3335 14 8.82683 14 10.6668C14 12.5068 12.5067 14.0002 10.6667 14.0002Z" fill="currentColor"/>
<path d="M9.33334 2.66675C9.7 2.66675 10 2.36675 10 2.00008C10 1.63341 9.7 1.33341 9.33334 1.33341H7.66667L7.19334 0.860081C7.07334 0.740081 6.9 0.666748 6.72667 0.666748H3.94C3.76667 0.666748 3.59334 0.740081 3.47334 0.860081L3.00001 1.33341H1.33334C0.966672 1.33341 0.666672 1.63341 0.666672 2.00008C0.666672 2.36675 0.966672 2.66675 1.33334 2.66675H9.33334Z" fill="currentColor"/>
<path d="M10.5 8C10.2267 8 10 8.22667 10 8.5V10.9533C10 11.1933 10.1267 11.4067 10.3333 11.5267L12.0133 12.5067C12.2333 12.6333 12.5133 12.5667 12.6533 12.36C12.8067 12.1333 12.7333 11.82 12.4933 11.68L11 10.8V8.5C11 8.22667 10.7733 8 10.5 8Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconAutoDelete }
