import React, { FC } from 'react'

const IconSubdirectoryArrowLeft: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.80669 10.4734L6.86003 13.5267C7.12003 13.7867 7.54669 13.7867 7.80669 13.5267C8.06669 13.2667 8.06669 12.8401 7.80669 12.5801L5.88669 10.6667H12.6667C13.0334 10.6667 13.3334 10.3667 13.3334 10.0001V3.33341C13.3334 2.96675 13.0334 2.66675 12.6667 2.66675C12.3 2.66675 12 2.96675 12 3.33341V9.33342H5.88669L7.80669 7.42008C8.06669 7.16008 8.06669 6.73341 7.80669 6.47341C7.54669 6.21341 7.12003 6.21341 6.86003 6.47341L3.80669 9.52675C3.54669 9.78675 3.54669 10.2134 3.80669 10.4734Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSubdirectoryArrowLeft }
