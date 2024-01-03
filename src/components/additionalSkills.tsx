import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import ComponentWrapper from './componentWrapper';

gsap.registerPlugin(ScrollTrigger)

type Props = {}

const AdditionalSkills = (props: Props) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 1
  });

  useEffect(() => {
    if (inView) {
      const textElements = document.querySelectorAll(".stagger")
      gsap.fromTo(textElements, {
        opacity: 0,
        y: 50
      }, {
        duration: 0.4,
        opacity: 1,
        y: 0,
        stagger: 0.1,
        ease: "power2.out"
      })
    }
  }, [inView])

  return (
    <ComponentWrapper>
      <div ref={ref}>
        <h2 className='text-3xl my-12'>Additional Technologies and Skills</h2>
        <ul className={`grid grid-cols-2 lg:grid-cols-3 lg:mx-60 stagger-skills`}>
          <li className='list-styles stagger opacity-0'><p>Git</p></li>
          <li className='list-styles stagger opacity-0'><p>Linux</p></li>
          <li className='list-styles stagger opacity-0'><p>B1 Finnish</p></li>
          <li className='list-styles stagger opacity-0'><p>MobX</p></li>
          <li className='list-styles stagger opacity-0'><p>Python</p></li>
          <li className='list-styles stagger opacity-0'><p>Django</p></li>
          <li className='list-styles stagger opacity-0'><p>A11y</p></li>
          <li className='list-styles stagger opacity-0'><p>VPS</p></li>
        </ul>
      </div>
    </ComponentWrapper>
  )
}

export default AdditionalSkills