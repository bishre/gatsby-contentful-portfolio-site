import React, { useEffect } from 'react'
import ComponentWrapper from './componentWrapper'
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

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
      <h2 className='text-3xl my-12'>About me</h2>
      <div ref={ref} className={`${inView ? 'opacity-100' : 'opacity-0'}`}>
        <ul className="grid grid-cols-12">
          <li className="stagger-timeline col-start-1 col-span-3">
            <div>
              <h3 className="text-left">1.2018 - 12.2018</h3>
              <div className="flex items-center mt-1 mb-2">
                <div className="rounded-full w-4 h-4 row-start-2 col-span-12 bg-gradient-to-br from-indigo-500 to-pink-500 timepoint"></div>
                <div className="h-1 w-full bg-purple-500 timeline"></div>
              </div>
              <p className="text-left text-xs mr-2">Studied Full Stack Web Development at Helsinki Business College. Earned a Vocational Degree in Information Technology.</p>
            </div>
          </li>
          <li className="stagger-timeline col-start-4 col-span-3">
            <h3 className="text-left">1.2019 - 5.2019</h3>
            <div className="flex items-center mt-1 mb-2">
              <div className="rounded-full w-4 h-4 row-start-2 col-span-12 bg-gradient-to-br from-indigo-500 to-pink-500 timepoint"></div>
              <div className="h-1 w-full bg-purple-500 timeline"></div>
            </div>
            <p className="text-left text-xs mr-2">Did 5 months internship at Druid Oy. Learned ReactJS, basics of Drupal.</p>
          </li>
          <li className="stagger-timeline col-start-7 col-span-3">
            <h3 className="text-left">6.2019 - 8.2019</h3>
            <div className="flex items-center mt-1 mb-2">
              <div className="rounded-full w-4 h-4 row-start-2 col-span-12 bg-gradient-to-br from-indigo-500 to-pink-500 timepoint"></div>
              <div className="h-1 w-full bg-purple-500 timeline"></div>
            </div>
            <p className="text-left text-xs mr-2">Worked from Cloudpoint Oy. Took part in developing Chrome extensions using HTML, CSS, JS and jQuery.</p>
          </li>
          <li className="stagger-timeline col-start-10 col-span-3">
            <h3 className="text-left">10.2019 - 12.2023</h3>
            <div className="flex items-center mt-1 mb-2">
              <div className="rounded-full w-4 h-4 row-start-2 col-span-12 bg-gradient-to-br from-indigo-500 to-pink-500 timepoint"></div>
              <div className="h-1 w-full bg-purple-500 timeline"></div>
            </div>
            <p className="text-left text-xs">Worked at Bond Agency Oy as a Web Developer. Contributed to development of numerous websites from a diverse clientele using NextJS, ReactJS, SCSS, Wordpress and Docker.</p>
          </li>
        </ul>
      </div>
    </ComponentWrapper>
  )
}

export default Timeline