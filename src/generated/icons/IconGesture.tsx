import React, { FC } from 'react'

const IconGesture: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.47999 4.02667C2.79332 4.33333 3.28666 4.34667 3.61999 4.06667C3.86666 3.85333 4.07999 3.72667 4.19999 3.78C4.53332 3.91333 4.19999 4.46667 3.99999 4.79333C3.83332 5.07333 2.09332 7.38667 2.09332 9C2.09332 9.85333 2.41332 10.56 2.98666 10.9867C3.48666 11.36 4.14666 11.4733 4.74666 11.2933C5.45999 11.0867 6.04666 10.36 6.78666 9.44667C7.59332 8.45333 8.67332 7.15333 9.50666 7.15333C10.5933 7.15333 10.6067 7.82667 10.68 8.34667C8.15999 8.77333 7.09332 10.7933 7.09332 11.9267C7.09332 13.06 8.05332 13.9867 9.23332 13.9867C10.32 13.9867 12.0933 13.1 12.36 9.92H13.1667C13.6267 9.92 14 9.54667 14 9.08667C14 8.62667 13.6267 8.25333 13.1667 8.25333H12.3533C12.2533 7.15333 11.6267 5.45333 9.66666 5.45333C8.16666 5.45333 6.87999 6.72667 6.37332 7.34667C5.98666 7.83333 4.99999 9 4.84666 9.16C4.67999 9.36 4.39332 9.72 4.10666 9.72C3.80666 9.72 3.62666 9.16667 3.86666 8.44C4.09999 7.71333 4.79999 6.53333 5.09999 6.09333C5.61999 5.33333 5.96666 4.81333 5.96666 3.90667C5.96666 2.46 4.87332 2 4.29332 2C3.56666 2 2.93332 2.42 2.49332 2.81333C2.13999 3.13333 2.13999 3.69333 2.47999 4.02667ZM9.25332 12.3667C9.04666 12.3667 8.75999 12.1933 8.75999 11.8867C8.75999 11.4867 9.24666 10.42 10.6733 10.0467C10.4733 11.84 9.71999 12.3667 9.25332 12.3667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconGesture }
