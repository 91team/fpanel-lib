import React, { FC } from 'react'

const IconModelTraining: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.3333 8.99994C10.3333 10.3333 8.66667 11.3333 8.66667 12.3333H7.33333C7.33333 11.3333 5.66667 10.3333 5.66667 8.99994C5.66667 7.71327 6.71333 6.66661 8 6.66661C9.28667 6.66661 10.3333 7.71327 10.3333 8.99994ZM8.66667 12.9999H7.33333V13.3333C7.33333 13.6999 7.63333 13.9999 8 13.9999C8.36667 13.9999 8.66667 13.6999 8.66667 13.3333V12.9999ZM12.6667 8.66661C12.6667 9.59327 12.3933 10.4599 11.92 11.1866C11.7533 11.4466 11.7933 11.7933 12.0133 12.0133C12.3067 12.3066 12.8133 12.2666 13.04 11.9133C13.6467 10.9799 14 9.86661 14 8.66661C14 7.09327 13.3933 5.65994 12.4 4.58661C12.14 4.30661 11.7 4.29994 11.4333 4.56661C11.18 4.81994 11.18 5.22661 11.42 5.49327C12.1933 6.32661 12.6667 7.43994 12.6667 8.66661ZM10.4333 3.09994L8.57333 1.23994C8.36 1.02661 8 1.17327 8 1.47327V2.66661C4.68667 2.66661 2 5.35327 2 8.66661C2 9.86661 2.35333 10.9799 2.96 11.9199C3.18667 12.2733 3.69333 12.3133 3.98667 12.0199C4.20667 11.7999 4.24667 11.4599 4.08 11.1999C3.15333 9.76661 2.98667 7.79994 4.16667 5.86661C4.96667 4.56661 6.47333 3.87327 8 3.99994V5.19327C8 5.49327 8.36 5.63994 8.56667 5.42661L10.4267 3.56661C10.56 3.43994 10.56 3.22661 10.4333 3.09994Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconModelTraining }
