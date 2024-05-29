import React, { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer';
import RatioContainer from './ratioContainer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

interface Project {
  node: {
    title: string;
    link: string;
    description: string;
    image: {
      file: {
        url: string;
      }
    }
  }
}

const Project = ({ node }: Project) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2
  });

  const imageRef = useRef(null)

  useEffect(() => {
    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top bottom',
        scrub: true,
      },
      yPercent: 5
    })
  }, [])
  return (
    <>
      <div ref={ref} className={`${inView ? 'transform translate-y-0 transition-all opacity-100' : 'transform translate-y-1/4 opacity-0'} duration-500 ease-in-out`}>
        <div className='relative rounded group'>
          <div className='flex overflow-hidden items-center justify-center w-72 h-52 lg:w-96 lg:h-72 bg-white mx-auto'>
            <img ref={imageRef} className='w-96 h-80 lg:w-128 lg:h-96 object-cover transition transition-transform scale-110 group-hover:scale-100 duration-300 object-cover' src={node.image?.file.url} alt="" />
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <h2>{node.title}</h2>
          <p className='text-xs'>{node.description}</p>
          <a href={node.link} target='_blank'>
            <button className='px-4 py-2 m-4 text-sm bg-white hover:bg-purple-500 transition duration-300 ease-in-out text-black hover:text-white brounded-full'>
              Go to site
            </button>
          </a>
        </div>

      </div>
    </>
  )
}

export default Project