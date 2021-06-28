import React, { FC } from 'react'

const IconEco: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.03333 5.36661C2.21333 7.18661 2.21333 10.1333 4.01999 11.9533C4.99999 9.68661 6.74666 7.79328 8.92666 6.66661C7.07999 8.22661 5.78666 10.4066 5.33333 12.8799C7.06666 13.6999 9.19999 13.3999 10.6333 11.9666C12.6267 9.97328 13.1867 4.53995 13.3067 3.04661C13.32 2.83995 13.1533 2.67328 12.9533 2.69328C11.46 2.81328 6.02666 3.37328 4.03333 5.36661Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconEco }
