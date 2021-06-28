import React, { FC } from 'react'

const IconHearingDisabled: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3067 2.19992C11.0933 1.93992 11.1133 1.55992 11.3534 1.31992L11.36 1.31325C11.64 1.03325 12.1067 1.05992 12.3533 1.36658C13.38 2.62658 14 4.23992 14 5.99992C14 7.71325 13.4067 9.29325 12.4267 10.5399L11.4733 9.58659C12.22 8.58659 12.6667 7.34659 12.6667 5.99992C12.6667 4.55325 12.1533 3.22658 11.3067 2.19992ZM4.99335 3.10658C5.48668 2.82658 6.05335 2.66658 6.66668 2.66658C8.53335 2.66658 10 4.13325 10 5.99992C10 6.53325 9.84668 7.12659 9.58002 7.69325L10.5667 8.67992C10.58 8.65325 10.6 8.62659 10.62 8.59325C11.08 7.76658 11.3334 6.83992 11.3334 5.99992C11.3334 3.37992 9.28668 1.33325 6.66668 1.33325C5.67335 1.33325 4.76668 1.62658 4.02002 2.13325L4.99335 3.10658ZM6.66668 4.33325C6.52668 4.33325 6.40002 4.35325 6.27335 4.38658L8.28002 6.39325C8.31335 6.26659 8.33335 6.13992 8.33335 5.99992C8.33335 5.07992 7.58668 4.33325 6.66668 4.33325ZM13.66 13.6599L2.34002 2.33992C2.08002 2.07992 1.66002 2.07992 1.40002 2.33992C1.14002 2.59992 1.14002 3.01992 1.40002 3.27992L2.34668 4.22659C2.21335 4.55325 2.11335 4.89325 2.06002 5.25325C1.99335 5.64658 2.31335 5.99992 2.70668 5.99992H2.73335C3.05335 5.99992 3.32668 5.76659 3.37335 5.45325C3.38668 5.39992 3.40002 5.34658 3.41335 5.29992L7.82668 9.71325C7.24002 10.1666 6.64002 10.6533 6.31335 11.6466C5.98002 12.6466 5.64668 12.9866 5.17335 13.2333C5.04002 13.2933 4.86002 13.3333 4.66668 13.3333C4.08002 13.3333 3.58002 12.9466 3.40002 12.4199C3.31335 12.1599 3.04668 11.9999 2.76668 11.9999C2.32668 11.9999 2.00002 12.4266 2.13335 12.8399C2.48668 13.8999 3.48668 14.6666 4.66668 14.6666C5.04668 14.6666 5.42002 14.5866 5.76002 14.4333C6.66668 13.9599 7.18002 13.2799 7.58002 12.0666C7.79335 11.4133 8.18002 11.1133 8.72002 10.6999C8.74002 10.6866 8.75335 10.6733 8.77335 10.6599L12.7133 14.5999C12.9733 14.8599 13.3933 14.8599 13.6533 14.5999C13.92 14.3399 13.92 13.9199 13.66 13.6599Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconHearingDisabled }
