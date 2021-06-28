import React, { FC } from 'react'

const IconDynamicForm: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.4533 6.47341L11.9733 11.9334C11.82 12.2601 11.3333 12.1534 11.3333 11.7934V7.33341H10.3333C10.1467 7.33341 10 7.18675 10 7.00008V3.00008C10 2.81341 10.1467 2.66675 10.3333 2.66675H14.1733C14.4067 2.66675 14.5733 2.90675 14.48 3.12675L13.3333 6.00008H14.1467C14.3933 6.00008 14.5533 6.25341 14.4533 6.47341ZM10 8.66675V13.3334H2.66668C1.93334 13.3334 1.33334 12.7334 1.33334 12.0001V10.0001C1.33334 9.26675 1.93334 8.66675 2.66668 8.66675H10ZM4.16668 11.0001C4.16668 10.7267 3.94001 10.5001 3.66668 10.5001C3.39334 10.5001 3.16668 10.7267 3.16668 11.0001C3.16668 11.2734 3.39334 11.5001 3.66668 11.5001C3.94001 11.5001 4.16668 11.2734 4.16668 11.0001ZM8.66668 2.66675V7.33341H2.66668C1.93334 7.33341 1.33334 6.73341 1.33334 6.00008V4.00008C1.33334 3.26675 1.93334 2.66675 2.66668 2.66675H8.66668ZM4.16668 5.00008C4.16668 4.72675 3.94001 4.50008 3.66668 4.50008C3.39334 4.50008 3.16668 4.72675 3.16668 5.00008C3.16668 5.27341 3.39334 5.50008 3.66668 5.50008C3.94001 5.50008 4.16668 5.27341 4.16668 5.00008Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconDynamicForm }
