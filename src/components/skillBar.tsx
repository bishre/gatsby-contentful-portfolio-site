import React from 'react'
import { useInView } from 'react-intersection-observer';

type Props = {
  skill: string;
  span: string;
}

const SkillBar = ({ skill, span }: Props) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 1
  });
  const className = `col-span-${span}`
  return (
    <div ref={ref} className="grid grid-cols-12">
      <h2 className="col-start-1 col-span-12 lg:col-span-6 text-left text-sm pb-2">{skill}</h2>
      <div className={`row-start-2 ${className} ${inView ? 'w-full' : 'w-0'} transition-all duration-500 bg-gradient-to-r from-white to-purple-500 h-4 rounded-lg`}></div>
    </div>
  )
}

export default SkillBar