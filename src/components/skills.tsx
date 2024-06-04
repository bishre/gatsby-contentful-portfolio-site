import React from 'react'
import ComponentWrapper from './componentWrapper'
import SkillBar from './skillBar'

const Skills = () => {
  return (
    <ComponentWrapper>
      <h2 id="skills" className='text-3xl my-12'>Skills</h2>
      <div >
        <ul>
          <li>
            <SkillBar skill="HTML5, CSS3, JS6" widthClass="w-5/5"/>
          </li>
          <li>
            <SkillBar skill="ReactJS, NextJS, GatsbyJS" widthClass="w-5/5"/>
          </li>
          <li>
            <SkillBar skill="NodeJS, Docker, Wordpress" widthClass="w-3/5"/>
          </li>
          <li>
            <SkillBar skill="Typescript, Redux" widthClass="w-3/5"/>
          </li>
          <li>
            <SkillBar skill="PHP, Nginx, SEO, Web Analytics" widthClass="w-1/5"/>
          </li>
        </ul>
      </div>
    </ComponentWrapper>
  )
}

export default Skills