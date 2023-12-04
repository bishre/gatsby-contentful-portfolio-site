import React from 'react'
import { useInView } from 'react-intersection-observer';

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
  return (
    <>
      <div ref={ref} className={`${inView ? 'transform translate-y-0 transition-all opacity-100' : 'transform translate-y-1/4 opacity-0'} duration-500 ease-in-out`}>
        <div className='rounded overflow-hidden group'>
          <img className='transition transition-transform scale-110 group-hover:scale-100 duration-300' src={node.image.file.url} alt="" />
        </div>
        <h2>{node.title}</h2>
        <p className='text-xs'>{node.description}</p>
        <a href={node.link} target='_blank'>
          <button className='px-4 py-2 m-4 text-sm bg-purple-500 hover:bg-blue-700 transition duration-300 ease-in-out text-white rounded-full'>
            Go to site
          </button>
        </a>
      </div>
    </>
  )
}

export default Project