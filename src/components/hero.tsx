import { Link } from 'gatsby';
import React from 'react'
import RatioContainer from './ratioContainer';
import { useInView } from 'react-intersection-observer';

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
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024
  return (
    <div className='relative'>
      <div className='absolute w-50 top-1/2 text-white text-3xl transform -translate-y-1/2 mx-16 z-10'>
        <div ref={ref} className={`${inView ? 'transform translate-y-0 transition-all opacity-100' : 'transform translate-y-1/4 opacity-0'} duration-500 ease-in-out`}>
          <h2 className="text-2xl md:text-6xl lg:my-8">{title} (Beev)</h2>
          <p className={`bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text text-sm md:text-lg lg:text-2xl ${inView ? 'opacity-100' : 'opacity-0'} transition transform-all duration-500 ease-in`}>{description}</p>
        </div>
      </div>
      <RatioContainer width={isMobile ? 4 : 16} height={isMobile ? 5 : 9}>
        <img className={`w-full h-full object-cover ${inView ? 'brightness-50' : 'brightness-100'} duration-500 ease-in`} src={`${heroImage.file.url}`} alt="" />
      </RatioContainer>
    </div>
  )
}

export default Hero