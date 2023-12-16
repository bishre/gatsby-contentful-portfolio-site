import gsap from 'gsap';
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

type Props = {}

const AdditionalSkills = (props: Props) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 1
  });

  useEffect(() => {
    if (!inView) return
    const textElements = document.querySelectorAll(".stagger")
    gsap.from(textElements, {
      duration: 0.4,
      opacity: 0,
      y: 50,
      stagger: 0.1,
      ease: "power2.out"
    })
  }, [inView])

  return (
    <div ref={ref}>
      <h2 className='text-3xl my-12'>Additional technologies and Skills</h2>
      <ul className={`grid grid-cols-3 mx-60 ${inView ? 'opacity-100' : 'opacity-0'}`}>
        <li className='list-styles stagger'><p>Git</p></li>
        <li className='list-styles stagger'><p>Linux</p></li>
        <li className='list-styles stagger'><p>B1 Finnish</p></li>
        <li className='list-styles stagger'><p>MobX</p></li>
        <li className='list-styles stagger'><p>Python</p></li>
        <li className='list-styles stagger'><p>Django</p></li>
        <li className='list-styles stagger'><p>A11y</p></li>
        <li className='list-styles stagger'><p>Virtual Private Servers</p></li>
      </ul>
    </div>
  )
}

export default AdditionalSkills