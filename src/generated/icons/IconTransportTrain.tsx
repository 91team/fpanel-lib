import React, { FC } from 'react'

const IconTransportTrain: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.99998 2L3.66457 1.32918C3.29409 1.51442 3.14392 1.96493 3.32916 2.33541C3.51248 2.70205 3.95558 2.85292 4.32383 2.67648L4.33437 2.67202C4.35116 2.66511 4.38578 2.65155 4.44028 2.63339C4.52409 2.60545 4.65488 2.56663 4.84004 2.52434L4.99344 3.29134C4.25799 3.44837 3.88731 3.53053 3.44515 4.07706C3 4.62727 3 5.13176 3 6.14074V10C3 11.8856 3 12.8284 3.58579 13.4142C3.89133 13.7198 4.29402 13.8659 4.87697 13.9359L3.42437 15.1464C3.28067 15.2661 3.36535 15.5 3.55241 15.5H5.29289C5.4255 15.5 5.55268 15.4473 5.64645 15.3536L7 14H9L10.3536 15.3536C10.4473 15.4473 10.5745 15.5 10.7071 15.5H12.4476C12.6347 15.5 12.7193 15.2661 12.5756 15.1464L11.123 13.9359C11.706 13.8659 12.1087 13.7198 12.4142 13.4142C13 12.8284 13 11.8856 13 10V6.14074C13 5.13176 13 4.62727 12.5549 4.07706C12.1097 3.52685 11.737 3.44728 10.9916 3.28815L10.9531 3.28L11.143 2.52049C11.3371 2.56427 11.4733 2.6046 11.5597 2.63339C11.6142 2.65155 11.6488 2.66511 11.6656 2.67202L11.6761 2.67648C12.0444 2.85292 12.4875 2.70205 12.6708 2.33541C12.856 1.96493 12.7059 1.51442 12.3354 1.32918L12.0027 1.99452C12.3354 1.32918 12.3358 1.32938 12.3354 1.32918L12.3338 1.32837L12.3321 1.32753L12.3284 1.32571L12.3199 1.32161L12.2984 1.31161C12.282 1.30417 12.2615 1.29522 12.2367 1.28501C12.1871 1.26458 12.1202 1.23907 12.034 1.21036C11.8618 1.15295 11.6128 1.08271 11.2721 1.01456C10.591 0.878359 9.54097 0.75 7.99998 0.75C6.459 0.75 5.40892 0.878359 4.72789 1.01456C4.38715 1.08271 4.13816 1.15295 3.96594 1.21036C3.87981 1.23907 3.81287 1.26458 3.76325 1.28501C3.73844 1.29522 3.71796 1.30417 3.70159 1.31161L3.68009 1.32161L3.67159 1.32571L3.6679 1.32753L3.66619 1.32837C3.66579 1.32857 3.66457 1.32918 3.99998 2ZM9.64936 2.31027L9.4613 3.06248C9.01939 3.02318 8.53287 3 8 3C7.44281 3 6.9363 3.02534 6.47847 3.06796L6.32731 2.31215C6.78948 2.27465 7.34314 2.25 7.99998 2.25C8.64582 2.25 9.19191 2.27383 9.64936 2.31027ZM4.28759 5.10622C4.04218 5.4218 4.07384 5.73836 4.13715 6.37147L4.46338 9.63378C4.47815 9.78149 4.48553 9.85534 4.58345 10.0339C4.68136 10.2125 4.70427 10.2306 4.75008 10.2667C5.12597 10.5629 6.01662 11 8 11C9.98338 11 10.874 10.5629 11.2499 10.2667C11.2957 10.2306 11.3186 10.2125 11.4166 10.0339C11.5145 9.85534 11.5219 9.78149 11.5366 9.63377L11.8629 6.37147C11.9262 5.73836 11.9578 5.4218 11.7124 5.10622C11.467 4.79063 11.2001 4.75052 10.6664 4.67029C10.0448 4.57685 9.17611 4.5 8 4.5C6.82389 4.5 5.95516 4.57685 5.33357 4.67029C4.79986 4.75052 4.53301 4.79063 4.28759 5.10622ZM4 11.9563C4 11.8622 4 11.8151 4.01864 11.7837C4.03755 11.7518 4.06887 11.7292 4.10509 11.7213C4.14082 11.7136 4.18546 11.7285 4.27475 11.7582L5.59327 12.1978C5.76518 12.2551 5.85113 12.2837 5.90848 12.3442C5.9291 12.3659 5.94669 12.3903 5.96079 12.4167C6 12.4902 6 12.5809 6 12.7621C6 12.8601 6 12.9091 5.97548 12.9437C5.96677 12.956 5.95603 12.9668 5.94372 12.9755C5.90909 13 5.86008 13 5.76207 13H5.04372C4.69198 13 4.51612 13 4.38017 12.9353C4.2419 12.8695 4.1305 12.7581 4.0647 12.6198C4 12.4839 4 12.308 4 11.9563ZM11.9814 11.7837C12 11.8151 12 11.8622 12 11.9563C12 12.308 12 12.4839 11.9353 12.6198C11.8695 12.7581 11.7581 12.8695 11.6198 12.9353C11.4839 13 11.308 13 10.9563 13H10.2379C10.1399 13 10.0909 13 10.0563 12.9755C10.044 12.9668 10.0332 12.956 10.0245 12.9437C10 12.9091 10 12.8601 10 12.7621C10 12.5809 10 12.4903 10.0392 12.4167C10.0533 12.3903 10.0709 12.3659 10.0915 12.3442C10.1489 12.2837 10.2348 12.2551 10.4067 12.1978L11.7252 11.7583C11.8145 11.7285 11.8592 11.7136 11.8949 11.7213C11.9311 11.7292 11.9625 11.7518 11.9814 11.7837Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconTransportTrain }
