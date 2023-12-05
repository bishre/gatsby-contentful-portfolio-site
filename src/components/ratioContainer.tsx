import React from 'react'

type Props = {
  width: number;
  height: number;
  children: JSX.Element
}

const RatioContainer = ({ width, height, children }: Props) => {
  const paddingPercentage = (height / width) * 100;

  return (
    <div className="relative" style={{ paddingTop: `${paddingPercentage}%` }}>
      <div className="absolute top-0 left-0 w-full h-full">
        {children}
      </div>
    </div>
  )
}

export default RatioContainer