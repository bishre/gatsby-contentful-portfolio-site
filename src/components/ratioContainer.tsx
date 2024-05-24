import React from 'react'

type Props = {
  className: string;
  width: number;
  height: number;
  children: JSX.Element
}

const RatioContainer = ({ className, width, height, children }: Props) => {
  const paddingPercentage = (height / width) * 100;

  return (
    <div className={`relative ${className}`} style={{ paddingTop: `${paddingPercentage}%` }}>
      <div className="absolute top-0 left-0 w-full h-full">
        {children}
      </div>
    </div>
  )
}

export default RatioContainer