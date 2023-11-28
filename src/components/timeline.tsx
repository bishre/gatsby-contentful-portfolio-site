import React from 'react'
import ComponentWrapper from './componentWrapper'

type Props = {}

const Timeline = (props: Props) => {
  return (
    <ComponentWrapper>
      <h2 className='text-3xl my-12'>About me</h2>
      <div>
        <ul className="grid grid-cols-12">
          <li className="col-start-1 col-span-3">
            <div>
              <h3 className="text-left">1.2018 - 12.2020</h3>
              <div className="flex items-center mt-1 mb-2">
                <div className="rounded-full w-4 h-4 row-start-2 col-span-12 bg-gradient-to-br from-indigo-500 to-pink-500"></div>
                <div className="h-1 w-full bg-purple-500"></div>
              </div>
              <p className="text-left text-xs mr-2">Studied Full Stack Web Development at Helsinki Business College. Earned a Vocational Degree in Information Technology.</p>
            </div>
          </li>
          <li className="col-start-4 col-span-3">
            <h3 className="text-left">1.2019 - 5.2019</h3>
            <div className="flex items-center mt-1 mb-2">
              <div className="rounded-full w-4 h-4 row-start-2 col-span-12 bg-gradient-to-br from-indigo-500 to-pink-500"></div>
              <div className="h-1 w-full bg-purple-500"></div>
            </div>
            <p className="text-left text-xs mr-2">Did 5 months internship at Druid Oy. Learned ReactJS, basics of Drupal.</p>
          </li>
          <li className="col-start-7 col-span-3">
            <h3 className="text-left">6.2019 - 8.2019</h3>
            <div className="flex items-center mt-1 mb-2">
              <div className="rounded-full w-4 h-4 row-start-2 col-span-12 bg-gradient-to-br from-indigo-500 to-pink-500"></div>
              <div className="h-1 w-full bg-purple-500"></div>
            </div>
            <p className="text-left text-xs mr-2">Worked from Cloudpoint Oy. Took part in developing Chrome extensions using HTML, CSS, JS and jQuery.</p>
          </li>
          <li className="col-start-10 col-span-3">
            <h3 className="text-left">10.2019 - 12.2023</h3>
            <div className="flex items-center mt-1 mb-2">
              <div className="rounded-full w-4 h-4 row-start-2 col-span-12 bg-gradient-to-br from-indigo-500 to-pink-500"></div>
              <div className="h-1 w-full bg-purple-500"></div>
            </div>
            <p className="text-left text-xs">Worked at Bond Agency Oy as a Web Developer. Contributed to development of numerous websites from a diverse clientele using NextJS, ReactJS, SCSS, Wordpress and Docker.</p>
          </li>
        </ul>
      </div>
    </ComponentWrapper>
  )
}

export default Timeline