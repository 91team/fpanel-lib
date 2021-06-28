import React, { FC } from 'react'

const IconSubdirectoryArrowRight: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1934 10.4734L9.14002 13.5267C8.88002 13.7867 8.45335 13.7867 8.19335 13.5267C7.93335 13.2667 7.93335 12.8401 8.19335 12.5801L10.1134 10.6667H3.33335C2.96669 10.6667 2.66669 10.3667 2.66669 10.0001V3.33341C2.66669 2.96675 2.96669 2.66675 3.33335 2.66675C3.70002 2.66675 4.00002 2.96675 4.00002 3.33341V9.33342H10.1134L8.19335 7.42008C7.93335 7.16008 7.93335 6.73341 8.19335 6.47341C8.45335 6.21341 8.88002 6.21341 9.14002 6.47341L12.1934 9.52675C12.4534 9.78675 12.4534 10.2134 12.1934 10.4734Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSubdirectoryArrowRight }
