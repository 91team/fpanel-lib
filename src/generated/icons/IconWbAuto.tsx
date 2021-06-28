import React, { FC } from 'react'

const IconWbAuto: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.56667 8.43329H6.1L5.33333 5.99996L4.56667 8.43329ZM15.1467 4.66663C14.8667 4.66663 14.6333 4.86663 14.58 5.13329L13.8667 8.85996L12.9933 5.18663C12.92 4.87996 12.6467 4.66663 12.3333 4.66663C12.02 4.66663 11.7467 4.87996 11.68 5.18663L10.8067 8.85996L10.0933 5.13329C10.04 4.86663 9.8 4.66663 9.52667 4.66663C9.52 4.66663 9.50667 4.67329 9.5 4.67329C8.52 3.45329 7.02 2.66663 5.33333 2.66663C2.38667 2.66663 0 5.05329 0 7.99996C0 10.9466 2.38667 13.3333 5.33333 13.3333C7.44667 13.3333 9.26667 12.1 10.1333 10.32C10.2667 10.5333 10.5 10.6666 10.76 10.6666C11.1 10.6666 11.3933 10.4333 11.4733 10.1066L12.3333 6.59996L13.1933 10.1066C13.2733 10.4333 13.5733 10.6666 13.9067 10.6666C14.2533 10.6666 14.5467 10.4266 14.6267 10.0933L15.7 5.37329C15.7867 5.01329 15.5133 4.66663 15.1467 4.66663ZM7.28667 10.6666C7.03333 10.6666 6.80667 10.5066 6.72667 10.2666L6.4 9.33329H4.26667L3.94 10.2666C3.85333 10.5066 3.63333 10.6666 3.38 10.6666C2.96667 10.6666 2.68 10.26 2.82 9.87329L4.44667 5.29996C4.58 4.91996 4.93333 4.66663 5.33333 4.66663C5.73333 4.66663 6.08667 4.91996 6.22667 5.29329L7.85333 9.86663C7.98667 10.26 7.7 10.6666 7.28667 10.6666Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconWbAuto }
