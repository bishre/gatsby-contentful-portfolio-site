import React from 'react'
import ComponentWrapper from './componentWrapper'

type Props = {}

const Skills = (props: Props) => {
  return (
    <ComponentWrapper>
      <h2 className='text-3xl my-12'>Skills</h2>
      <div >
        <ul>
          <li>
            <div className="grid grid-cols-12 grid-rows-2">
              <h2 className="col-start-1 col-span-6 text-left text-sm pb-2">HTML5, CSS3, JS6</h2>
              <div className="row-start-2 col-span-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-4 rounded-lg"></div>
            </div>
          </li>
          <li>
            <div className="grid grid-cols-12 grid-rows-2">
              <h2 className="col-start-1 col-span-6 text-left text-sm pb-2">ReactJS, NextJS, GatsbyJS</h2>
              <div className="row-start-2 col-span-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-4 rounded-lg"></div>
            </div>
          </li>
          <li>
            <div className="grid grid-cols-12 grid-rows-2">
              <h2 className="col-start-1 col-span-6 text-left text-sm pb-2">NodeJS, Docker, Wordpress</h2>
              <div className="row-start-2 col-span-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-4 rounded-lg"></div>
            </div>
          </li>
          <li>
            <div className="grid grid-cols-12 grid-rows-2">
              <h2 className="col-start-1 col-span-6 text-left text-sm pb-2">Typescript, Redux</h2>
              <div className="row-start-2 col-span-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-4 rounded-lg"></div>
            </div>
          </li>
          <li>
            <div className="grid grid-cols-12 grid-rows-2">
              <h2 className="col-start-1 col-span-6 text-left text-sm pb-2">PHP, Nginx, SEO, Web Analytics</h2>
              <div className="row-start-2 col-span-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-4 rounded-lg"></div>
            </div>
          </li>
        </ul>
        
      </div>
    </ComponentWrapper>
  )
}

export default Skills