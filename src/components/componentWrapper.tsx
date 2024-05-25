import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const ComponentWrapper = ({ children }: Props) => {
  return (
    <div className='mx-4 py-12 lg:mx-12 lg:py-16 xl:w-4/5 xl:mx-auto'>{children}</div>
  )
}

export default ComponentWrapper