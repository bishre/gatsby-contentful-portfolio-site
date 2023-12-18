import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const ComponentWrapper = ({ children }: Props) => {
  return (
    <div className='mx-12 py-16'>{children}</div>
  )
}

export default ComponentWrapper