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
      <div className='transform translate-y-0 transition-all'>
        <div className='relative rounded group'>
          <a className='absolute top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2' href={node.link} target='_blank'>
            <button className='px-4 py-2 m-4 text-sm bg-white opacity-50 hover:bg-purple-500 hover:opacity-100 transition transition-all duration-300 ease-in-out text-black hover:text-white brounded-full'>
              Go to site
            </button>
          </a>
          <div className='flex overflow-hidden items-center justify-center w-full h-52 lg:h-72 bg-white mx-auto'>
            <img ref={imageRef} className='w-96 h-80 md:w-xl
             lg:w-2xl object-cover transition transition-all scale-110 brightness-100 group-hover:brightness-50 duration-300 object-cover' src={node.image?.file.url} alt="" />
          </div>
        </div>
        <div className='flex flex-col items-start'>
          <h3 className='text-sm'>{node.title}</h3>
          <p className='text-sm text-left'>{node.description}</p>
        </div>

      </div>
    </>
  )
}

export default Project