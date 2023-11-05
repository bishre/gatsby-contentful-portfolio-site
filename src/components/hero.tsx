import { Link } from 'gatsby';
import React from 'react'
import RatioContainer from './ratioContainer';

type Props = {
  title: string;
  description: {
    description: string;
  }
  heroImage: {
    file: {
      url: string;
    }
  }
}

const Hero = ({ title, description, heroImage }: Props) => {
  const isMobile = window.innerWidth < 1024 
  return (
    <div className='relative'>
      <div className='absolute w-50 top-1/2 text-white text-3xl transform -translate-y-1/2 mx-16 z-10'>
        <h2 className='text-xl lg:text-5xl lg:my-8'>{title}</h2>
        <p className='text-sm lg:text-xl'>{description.description}</p>
      </div>
      <RatioContainer width={isMobile ? 4 : 16} height={isMobile ? 5 : 9}>
        <img className='w-full h-full object-cover' src={`${heroImage.file.url}`} alt="" />
      </RatioContainer>
    </div>
  )
}

export default Hero