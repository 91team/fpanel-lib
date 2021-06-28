import React, { FC } from 'react'

const IconStarRate: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.62 6.66663L8.64 3.43997C8.44666 2.80663 7.55333 2.80663 7.36666 3.43997L6.38 6.66663H3.41333C2.76666 6.66663 2.5 7.49997 3.02666 7.8733L5.45333 9.60663L4.5 12.68C4.30666 13.3 5.02666 13.8 5.54 13.4066L8 11.54L10.46 13.4133C10.9733 13.8066 11.6933 13.3066 11.5 12.6866L10.5467 9.6133L12.9733 7.87997C13.5 7.49997 13.2333 6.6733 12.5867 6.6733H9.62V6.66663Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconStarRate }
