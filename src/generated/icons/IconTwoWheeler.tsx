import React, { FC } from 'react'

const IconTwoWheeler: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 7.33337C13.2133 7.33337 13.0933 7.35337 12.98 7.36671L11.6067 6.00004H12.6667C13.0333 6.00004 13.3333 5.70004 13.3333 5.33337V5.08004C13.3333 4.58671 12.8133 4.26004 12.3667 4.48671L10.8467 5.24671L9.13333 3.53337C9.01333 3.40671 8.84 3.33337 8.66667 3.33337H6.66667C6.3 3.33337 6 3.63337 6 4.00004C6 4.36671 6.3 4.66671 6.66667 4.66671H8.11333C8.29333 4.66671 8.46 4.74004 8.58667 4.86004L9.72667 6.00004H7.49333C7.38667 6.00004 7.28667 6.02671 7.19333 6.07337L5.1 7.12004C4.84667 7.24671 4.53333 7.20004 4.33333 6.99337L3.53333 6.19337C3.40667 6.07337 3.23333 6.00004 3.06 6.00004H0.666667C0.3 6.00004 0 6.30004 0 6.66671C0 7.03337 0.3 7.33337 0.666667 7.33337H2.66667C0.986667 7.33337 -0.326667 8.88004 0.0733333 10.6267C0.293333 11.5934 1.07333 12.3734 2.04 12.5934C3.78667 12.9934 5.33333 11.68 5.33333 10L6.27333 10.94C6.52667 11.1934 6.86667 11.3334 7.22 11.3334H7.89333C8.37333 11.3334 8.81333 11.08 9.05333 10.66L10.9933 7.26671L11.6667 7.94004C10.9133 8.54671 10.4933 9.54671 10.7467 10.64C10.9733 11.6 11.7533 12.38 12.7133 12.6C14.4533 12.9934 16 11.6734 16 10C16 8.52671 14.8067 7.33337 13.3333 7.33337ZM2.66667 11.3334C1.93333 11.3334 1.33333 10.7334 1.33333 10C1.33333 9.26671 1.93333 8.66671 2.66667 8.66671C3.4 8.66671 4 9.26671 4 10C4 10.7334 3.4 11.3334 2.66667 11.3334ZM13.3333 11.3334C12.6 11.3334 12 10.7334 12 10C12 9.26671 12.6 8.66671 13.3333 8.66671C14.0667 8.66671 14.6667 9.26671 14.6667 10C14.6667 10.7334 14.0667 11.3334 13.3333 11.3334Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconTwoWheeler }
