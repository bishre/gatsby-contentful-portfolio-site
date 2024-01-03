import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const ComponentWrapper = ({ children }: Props) => {
  return (
    <div className='mx-4 py-4 lg:mx-12 lg:py-16'>{children}</div>
  )
}

export default ComponentWrapper