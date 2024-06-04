import React from 'react'
import { useInView } from 'react-intersection-observer';

type Props = {
  skill: string;
  widthClass: string;
}

const SkillBar = ({ skill, widthClass }: Props) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 1
  });

  return (
    <div ref={ref} className="flex flex-col">
      <h2 className="text-left text-sm pb-2">{skill}</h2>
      <div className={`${inView ? widthClass : 'w-0'} transition-all duration-500 bg-gradient-to-r from-white to-purple-500 h-4 rounded-lg`}></div>
    </div>
  )
}

export default SkillBar