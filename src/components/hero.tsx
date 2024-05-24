import { Link } from 'gatsby';
import React, { useEffect } from 'react'
import RatioContainer from './ratioContainer';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import useMobile from '../hooks/useMobile';

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
    threshold: 0.5,
    delay: 0.2
  });

  const isMobile = useMobile()

  return (
    <div ref={ref} className='relative overflow-hidden'>
      <div className='absolute w-50 top-1/2 text-white text-3xl transform -translate-y-1/2 mx-4 lg:mx-16'>
        <div className={`${inView ? 'transform translate-y-0 transition-all opacity-100' : 'transform translate-y-1/4 opacity-0'} duration-500 ease-in-out`}>
          <h2 className="text-2xl md:text-6xl lg:my-8 capitalize text-left" id='animated-text'>{title}</h2>
          <p className="text-left text-xl md:text-2xl lg:text-4xl mr-2">{description}</p>
        </div>
      </div>
      <RatioContainer className='-z-10' width={isMobile ? 4 : 16} height={isMobile ? 5 : 9}>
        <img className={`w-full h-full object-cover z-0 ${inView ? 'brightness-50' : 'brightness-100'} duration-500 ease-in`} src={`${heroImage.file.url}`} alt="" />
      </RatioContainer>
    </div>
  )
}

export default Hero