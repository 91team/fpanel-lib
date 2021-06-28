import React, { FC } from 'react'

const IconFavorite: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.9 13.4199C8.39334 13.8799 7.61334 13.8799 7.10667 13.4133L7.03334 13.3466C3.53334 10.1799 1.24667 8.10661 1.33334 5.51995C1.37334 4.38661 1.95334 3.29995 2.89334 2.65995C4.65334 1.45995 6.82667 2.01995 8 3.39328C9.17334 2.01995 11.3467 1.45328 13.1067 2.65995C14.0467 3.29995 14.6267 4.38661 14.6667 5.51995C14.76 8.10661 12.4667 10.1799 8.96667 13.3599L8.9 13.4199Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconFavorite }
