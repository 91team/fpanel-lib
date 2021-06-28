import React, { FC } from 'react'

const IconDepartureBoard: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.56 0.753352C9.59999 0.386685 7.80666 1.25335 6.81332 2.70002C6.81999 2.69335 6.81999 2.68669 6.82666 2.68002C6.55999 2.66669 6.27999 2.66669 5.99999 2.66669C3.05332 2.66669 0.666656 3.00002 0.666656 5.33335V12C0.666656 12.5867 0.926656 13.1134 1.33332 13.48V14.3334C1.33332 14.8867 1.77999 15.3334 2.33332 15.3334C2.88666 15.3334 3.33332 14.8867 3.33332 14.3334V14H8.66666V14.3334C8.66666 14.88 9.11332 15.3334 9.66666 15.3334C10.2133 15.3334 10.6667 14.8867 10.6667 14.3334V13.48C11.0733 13.1134 11.3333 12.5867 11.3333 12V9.94668C13.8133 9.58668 15.6667 7.29335 15.28 4.63335C15 2.70002 13.48 1.10669 11.56 0.753352ZM2.99999 12.6667C2.44666 12.6667 1.99999 12.22 1.99999 11.6667C1.99999 11.1134 2.44666 10.6667 2.99999 10.6667C3.55332 10.6667 3.99999 11.1134 3.99999 11.6667C3.99999 12.22 3.55332 12.6667 2.99999 12.6667ZM1.99999 8.66668V5.33335H5.99999C5.99999 6.64002 6.53999 7.82002 7.40666 8.66668H1.99999ZM8.99999 12.6667C8.44666 12.6667 7.99999 12.22 7.99999 11.6667C7.99999 11.1134 8.44666 10.6667 8.99999 10.6667C9.55332 10.6667 9.99999 11.1134 9.99999 11.6667C9.99999 12.22 9.55332 12.6667 8.99999 12.6667ZM10.6667 8.66668C8.82666 8.66668 7.33332 7.17335 7.33332 5.33335C7.33332 3.49335 8.82666 2.00002 10.6667 2.00002C12.5067 2.00002 14 3.49335 14 5.33335C14 7.17335 12.5067 8.66668 10.6667 8.66668ZM10.5 2.66669C10.2267 2.66669 9.99999 2.89335 9.99999 3.16669V5.62002C9.99999 5.85335 10.1267 6.07335 10.3267 6.19335L12.0067 7.20002C12.2333 7.33335 12.5267 7.26002 12.66 7.04002C12.8 6.81335 12.7267 6.51335 12.4933 6.38002L11 5.50002V3.16669C11 2.89335 10.7733 2.66669 10.5 2.66669Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconDepartureBoard }
