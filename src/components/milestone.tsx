import React from 'react'

type Props = {
  date: string;
  details: string;
}

const Milestone = ({ date, details }: Props) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center">
        <div className="rounded-full w-4 h-4 row-start-2 col-span-12 bg-gradient-to-br from-white to-purple-500 timepoint"></div>
        <div className="lg:h-1 lg:w-full w-1 h-32 bg-purple-500 timeline"></div>
      </div>
      <div>
        <h3 className="">{date}</h3>
        <p className="text-md">{details}</p>
      </div>
    </div>
  )
}

export default Milestone