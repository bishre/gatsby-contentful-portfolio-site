import React, { useEffect } from 'react'
import ComponentWrapper from './componentWrapper'
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import Milestone from './milestone';
import { timelineData } from '../json/timeline';

type Props = {}

const MobileTimeline = (props: Props) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1
  });

  useEffect(() => {
    if (!inView) return
    const timelines = document.querySelectorAll(".timeline")
    gsap.from(timelines, {
      duration: 1,
      opacity: 0,
      height: 0,
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
        <ul>
          {timelineData.map(item => (
            <li className="stagger-timeline m-0">
            <Milestone
              {...item}
            />
          </li>
          ))}
        </ul>
      </div>
    </ComponentWrapper>
  )
}

export default MobileTimeline