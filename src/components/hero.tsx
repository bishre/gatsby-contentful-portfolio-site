import { Link } from 'gatsby';
import React from 'react'

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
  return (
    <div className='relative'>
      <div className='absolute w-50 top-1/2 text-white text-3xl transform -translate-y-1/2 mx-16'>
        <h2 className='text-5xl my-8'>{title}</h2>
        <p className='text-xl'>{description.description}</p>
      </div>
      <img src={`${heroImage.file.url}`} alt="" />
    </div>
  )
}

export default Hero