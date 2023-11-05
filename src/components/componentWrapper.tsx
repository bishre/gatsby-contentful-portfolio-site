import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const ComponentWrapper = ({ children }: Props) => {
  return (
    <div className='mx-12 my-16'>{children}</div>
  )
}

export default ComponentWrapper