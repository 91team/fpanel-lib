import React, { FC } from 'react'

const IconFiberNew: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 2.66675H2.66667C1.92667 2.66675 1.34 3.26008 1.34 4.00008L1.33334 12.0001C1.33334 12.7401 1.92667 13.3334 2.66667 13.3334H13.3333C14.0733 13.3334 14.6667 12.7401 14.6667 12.0001V4.00008C14.6667 3.26008 14.0733 2.66675 13.3333 2.66675ZM5.66667 9.47341C5.66667 9.76008 5.42667 10.0001 5.14 10.0001C4.97334 10.0001 4.81334 9.92008 4.71334 9.78008L3.16667 7.66675V9.58675C3.16667 9.82008 2.98 10.0001 2.75334 10.0001C2.52667 10.0001 2.33334 9.81341 2.33334 9.58675V6.52675C2.33334 6.24008 2.57334 6.00008 2.86 6.00008H2.89334C3.06667 6.00008 3.22667 6.08008 3.32667 6.22008L4.83334 8.33341V6.41341C4.83334 6.18675 5.02 6.00008 5.25334 6.00008C5.48667 6.00008 5.66667 6.18675 5.66667 6.41341V9.47341ZM9 6.42675C9 6.66008 8.81334 6.84008 8.58667 6.84008H7.33334V7.58675H8.58667C8.82 7.58675 9 7.77341 9 8.00008V8.00675C9 8.24008 8.81334 8.42008 8.58667 8.42008H7.33334V9.16008H8.58667C8.82 9.16008 9 9.34675 9 9.57341C9 9.80675 8.81334 9.98675 8.58667 9.98675H6.9C6.58667 9.98675 6.33334 9.73341 6.33334 9.42008V6.55341C6.33334 6.25341 6.58667 6.00008 6.9 6.00008H8.58667C8.82 6.00008 9 6.18675 9 6.41341V6.42675ZM13.6667 9.33341C13.6667 9.70008 13.3667 10.0001 13 10.0001H10.3333C9.96667 10.0001 9.66667 9.70008 9.66667 9.33341V6.41341C9.66667 6.18675 9.85334 6.00008 10.08 6.00008C10.3067 6.00008 10.4933 6.18675 10.4933 6.41341V9.00675H11.2467V7.07341C11.2467 6.84008 11.4333 6.66008 11.66 6.66008C11.8867 6.66008 12.0733 6.84675 12.0733 7.07341V9.00008H12.82V6.41341C12.82 6.18008 13.0067 6.00008 13.2333 6.00008C13.46 6.00008 13.6467 6.18675 13.6467 6.41341V9.33341H13.6667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconFiberNew }
