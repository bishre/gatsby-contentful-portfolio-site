import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const ComponentWrapper = ({ children }: Props) => {
  return (
    <div className='p-10'>{children}</div>
  )
}

export default ComponentWrapper