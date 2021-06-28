import React, { FC } from 'react'

const IconReceipt: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 1.47334C13.9133 1.47334 13.8267 1.50667 13.7667 1.57334L13.24 2.10001C13.1067 2.23334 12.9 2.23334 12.7667 2.10001L12.24 1.57334C12.1067 1.44001 11.9 1.44001 11.7667 1.57334L11.24 2.10001C11.1067 2.23334 10.9 2.23334 10.7667 2.10001L10.24 1.57334C10.1067 1.44001 9.9 1.44001 9.76667 1.57334L9.24 2.10001C9.10667 2.23334 8.9 2.23334 8.76667 2.10001L8.24 1.57334C8.10667 1.44001 7.9 1.44001 7.76667 1.57334L7.24 2.10001C7.10667 2.23334 6.9 2.23334 6.76667 2.10001L6.23333 1.56667C6.1 1.43334 5.89333 1.43334 5.76 1.56667L5.23333 2.10001C5.1 2.23334 4.89333 2.23334 4.76 2.10001L4.23333 1.56667C4.1 1.43334 3.89333 1.43334 3.76 1.56667L3.23333 2.10001C3.1 2.23334 2.89333 2.23334 2.76 2.10001L2.23333 1.56667C2.17333 1.50667 2.08667 1.47334 2 1.47334V14.5333C2.08667 14.5333 2.17333 14.5 2.23333 14.4333L2.76 13.9067C2.89333 13.7733 3.1 13.7733 3.23333 13.9067L3.76 14.4333C3.89333 14.5667 4.1 14.5667 4.23333 14.4333L4.76 13.9067C4.89333 13.7733 5.1 13.7733 5.23333 13.9067L5.76 14.4333C5.89333 14.5667 6.1 14.5667 6.23333 14.4333L6.76 13.9067C6.89333 13.7733 7.1 13.7733 7.23333 13.9067L7.76 14.4333C7.89333 14.5667 8.1 14.5667 8.23333 14.4333L8.76 13.9067C8.89333 13.7733 9.1 13.7733 9.23333 13.9067L9.76 14.4333C9.89333 14.5667 10.1 14.5667 10.2333 14.4333L10.76 13.9067C10.8933 13.7733 11.1 13.7733 11.2333 13.9067L11.76 14.4333C11.8933 14.5667 12.1 14.5667 12.2333 14.4333L12.76 13.9067C12.8933 13.7733 13.1 13.7733 13.2333 13.9067L13.76 14.4333C13.8267 14.5 13.9133 14.5333 13.9933 14.5333V1.47334H14ZM11.3333 11.3333H4.66667C4.3 11.3333 4 11.0333 4 10.6667C4 10.3 4.3 10 4.66667 10H11.3333C11.7 10 12 10.3 12 10.6667C12 11.0333 11.7 11.3333 11.3333 11.3333ZM11.3333 8.66668H4.66667C4.3 8.66668 4 8.36668 4 8.00001C4 7.63334 4.3 7.33334 4.66667 7.33334H11.3333C11.7 7.33334 12 7.63334 12 8.00001C12 8.36668 11.7 8.66668 11.3333 8.66668ZM11.3333 6.00001H4.66667C4.3 6.00001 4 5.70001 4 5.33334C4 4.96668 4.3 4.66668 4.66667 4.66668H11.3333C11.7 4.66668 12 4.96668 12 5.33334C12 5.70001 11.7 6.00001 11.3333 6.00001Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconReceipt }
