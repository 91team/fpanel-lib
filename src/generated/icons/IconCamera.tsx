import React, { FC } from 'react'

const IconCamera: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.20666 1.90669C9.31999 1.70669 9.20666 1.44002 8.97333 1.41336C7.22666 1.16669 5.43999 1.60002 4.01333 2.65336C3.88666 2.75336 3.84666 2.94002 3.93333 3.08669L5.93999 6.56669C6.06666 6.78669 6.38666 6.78669 6.51999 6.56669L9.20666 1.90669ZM14.2 5.55336C13.5467 3.90669 12.2533 2.58002 10.6333 1.88669C10.48 1.82002 10.3 1.88669 10.2133 2.03336L8.20666 5.50669C8.07999 5.72002 8.23999 6.00002 8.49999 6.00002H13.8867C14.12 6.00002 14.2867 5.76669 14.2 5.55336ZM14.2467 6.66669H10.1133C9.85999 6.66669 9.69333 6.94669 9.82666 7.16669L12.6667 12.0934C12.78 12.2934 13.0667 12.3267 13.2133 12.1467C14.3733 10.6934 14.8667 8.79336 14.58 6.95336C14.56 6.78669 14.4133 6.66669 14.2467 6.66669ZM2.78666 3.86002C1.63333 5.32002 1.13333 7.20669 1.41999 9.05336C1.43999 9.21336 1.58666 9.33336 1.75333 9.33336H5.88666C6.13999 9.33336 6.30666 9.05336 6.17333 8.83336L3.33333 3.91336C3.21333 3.71336 2.92666 3.68002 2.78666 3.86002ZM1.79999 10.4467C2.45333 12.0934 3.74666 13.42 5.36666 14.1134C5.51999 14.18 5.69999 14.1134 5.78666 13.9667L7.79333 10.4934C7.91999 10.2734 7.75999 9.99336 7.50666 9.99336H2.11333C1.87999 10 1.71333 10.2334 1.79999 10.4467ZM7.01999 14.5934C8.76666 14.84 10.5533 14.4067 11.98 13.3534C12.1133 13.2534 12.1533 13.06 12.0667 12.9134L10.06 9.43336C9.93333 9.21336 9.61333 9.21336 9.47999 9.43336L6.78666 14.0934C6.67333 14.2934 6.79333 14.56 7.01999 14.5934Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconCamera }
