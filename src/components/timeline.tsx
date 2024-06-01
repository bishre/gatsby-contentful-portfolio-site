import React, { useEffect } from 'react'
import ComponentWrapper from './componentWrapper'
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import Milestone from './milestone';
import { timelineData } from '../json/timeline';

type Props = {}

const Timeline = (props: Props) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 1
  });

  useEffect(() => {
    if (!inView) return
    const timelines = document.querySelectorAll(".timeline")
    gsap.from(timelines, {
      duration: 1,
      opacity: 0,
      width: 0,
      stagger: 0.1,
      ease: "power2.out"
    })
    const textElements = document.querySelectorAll('.stagger-timeline p, .stagger-timeline h3')
    gsap.from(textElements, {
      duration: 0.4,
      opacity: 0,
      y: 50,
      stagger: 0.1,
      ease: "power2.out"
    })
  }, [inView])

  return (
    <ComponentWrapper>
      <h2 className='text-3xl my-12'>My Journey</h2>
      <div ref={ref} className={`${inView ? 'opacity-100' : 'opacity-0'}`}>
        <ul className="grid grid-cols-4">
          {timelineData.map((item, i) => (
            <li key={i} className="stagger-timeline">
            <div>
              <h3 className="text-left">{item.date}</h3>
              <div className="flex items-center mt-1 mb-2">
                <div className="rounded-full w-4 h-4 row-start-2 col-span-12 bg-gradient-to-br from-white to-purple-500 timepoint"></div>
                <div className="h-1 w-full bg-purple-500 timeline"></div>
              </div>
              <p className="text-left text-xs mr-2">{item.details}</p>
            </div>
          </li>
          ))}
        </ul>
      </div>
    </ComponentWrapper>
  )
}

export default Timeline