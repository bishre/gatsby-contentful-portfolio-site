import { Link } from 'gatsby';
import React, { useEffect } from 'react'
import RatioContainer from './ratioContainer';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

type Props = {
  title: string;
  description: string;
  heroImage: {
    file: {
      url: string;
    }
  }
}

const Hero = ({ title, description, heroImage }: Props) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 1
  });

  useEffect(() => {
    if (!inView) return
    const textElements = document.querySelectorAll(".hero-stagger")

    gsap.from(textElements, {
      duration: 0.4,
      opacity: 0,
      y: 50,
      stagger: 0.2,
      ease: "power2.out"
    })
  }, [inView])

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768
  return (
    <div className='relative'>
      <div className='absolute w-50 top-1/2 text-white text-3xl transform -translate-y-1/2 mx-4 lg:mx-16 z-10'>
        <div ref={ref} className={`${inView ? 'transform translate-y-0 transition-all opacity-100' : 'transform translate-y-1/4 opacity-0'} duration-500 ease-in-out`}>
          <h2 className="text-2xl md:text-6xl lg:my-8 capitalize align-left" id='animated-text'>{title}</h2>
          <div className={`bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex bg-clip-text text-xl md:text-2xl lg:text-4xl ml-2`}>
            {description.split(' ').map(item => (
              <p className="hero-stagger mr-2">{item}</p>
            ))}
          </div>
        </div>
      </div>
      <RatioContainer width={isMobile ? 4 : 16} height={isMobile ? 5 : 9}>
        <img className={`w-full h-full object-cover ${inView ? 'brightness-50' : 'brightness-100'} duration-500 ease-in`} src={`${heroImage.file.url}`} alt="" />
      </RatioContainer>
    </div>
  )
}

export default Hero