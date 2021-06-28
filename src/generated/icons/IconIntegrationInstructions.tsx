import React, { FC } from 'react'

const IconIntegrationInstructions: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6667 2.00008H9.88C9.6 1.22675 8.86667 0.666748 8 0.666748C7.13333 0.666748 6.4 1.22675 6.12 2.00008H3.33333C3.24 2.00008 3.15333 2.00675 3.06667 2.02675C2.80667 2.08008 2.57333 2.21341 2.39333 2.39341C2.27333 2.51341 2.17333 2.66008 2.10667 2.82008C2.04 2.97341 2 3.14675 2 3.33341V12.6667C2 12.8467 2.04 13.0267 2.10667 13.1867C2.17333 13.3467 2.27333 13.4867 2.39333 13.6134C2.57333 13.7934 2.80667 13.9267 3.06667 13.9801C3.15333 13.9934 3.24 14.0001 3.33333 14.0001H12.6667C13.4 14.0001 14 13.4001 14 12.6667V3.33341C14 2.60008 13.4 2.00008 12.6667 2.00008ZM6.86667 9.92008C6.60667 10.1801 6.18 10.1801 5.92 9.92008L4.47333 8.47341C4.21333 8.21341 4.21333 7.79341 4.47333 7.53341L5.92 6.08675C6.18 5.82675 6.60667 5.82675 6.86667 6.08675C7.12667 6.34675 7.12667 6.76675 6.86667 7.02675L5.88667 8.00008L6.86 8.97341C7.12 9.23341 7.12667 9.66008 6.86667 9.92008ZM8 2.83341C7.72667 2.83341 7.5 2.60675 7.5 2.33341C7.5 2.06008 7.72667 1.83341 8 1.83341C8.27333 1.83341 8.5 2.06008 8.5 2.33341C8.5 2.60675 8.27333 2.83341 8 2.83341ZM9.13333 9.92008C8.87333 9.66008 8.87333 9.24008 9.13333 8.98008L10.1133 8.00008L9.13333 7.02008C8.87333 6.76008 8.87333 6.34008 9.13333 6.08008C9.39333 5.82008 9.82 5.82008 10.08 6.08008L11.5267 7.52675C11.7867 7.78675 11.7867 8.20675 11.5267 8.46675L10.08 9.91341C9.82 10.1801 9.39333 10.1801 9.13333 9.92008Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconIntegrationInstructions }
