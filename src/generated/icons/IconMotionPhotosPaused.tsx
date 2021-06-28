import React, { FC } from 'react'

const IconMotionPhotosPaused: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.64 7.36669C15.0267 11.54 11.5467 15.02 7.37335 14.6334C4.42001 14.36 1.96001 12.0667 1.44001 9.14669C1.26668 8.20002 1.31335 7.29335 1.52001 6.45335C1.61335 6.06669 2.02668 5.85335 2.39335 5.98669C2.70668 6.10002 2.89334 6.43335 2.81335 6.76002C2.68001 7.30669 2.63335 7.89335 2.68668 8.50002C2.93335 11.1934 5.28001 13.3334 7.98668 13.34C11.18 13.3467 13.7267 10.5334 13.28 7.26002C12.94 4.79335 10.84 2.84669 8.35334 2.68669C7.80001 2.64669 7.26668 2.70002 6.76668 2.82002C6.44001 2.89335 6.10668 2.71335 5.99334 2.39335C5.86001 2.02002 6.07335 1.61335 6.45334 1.52002C7.64668 1.23335 8.95334 1.24669 10.3067 1.76669C12.68 2.66669 14.4067 4.84669 14.64 7.36669ZM3.66668 2.66669C3.11335 2.66669 2.66668 3.11335 2.66668 3.66669C2.66668 4.22002 3.11335 4.66669 3.66668 4.66669C4.22001 4.66669 4.66668 4.22002 4.66668 3.66669C4.66668 3.11335 4.22001 2.66669 3.66668 2.66669ZM7.33334 10V6.00002C7.33334 5.63335 7.03334 5.33335 6.66668 5.33335C6.30001 5.33335 6.00001 5.63335 6.00001 6.00002V10C6.00001 10.3667 6.30001 10.6667 6.66668 10.6667C7.03334 10.6667 7.33334 10.3667 7.33334 10ZM10 10V6.00002C10 5.63335 9.70001 5.33335 9.33334 5.33335C8.96668 5.33335 8.66668 5.63335 8.66668 6.00002V10C8.66668 10.3667 8.96668 10.6667 9.33334 10.6667C9.70001 10.6667 10 10.3667 10 10Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconMotionPhotosPaused }
