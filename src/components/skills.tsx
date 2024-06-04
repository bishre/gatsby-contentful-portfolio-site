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
            <SkillBar skill="HTML5, CSS3, JS6" span="12"/>
          </li>
          <li>
            <SkillBar skill="ReactJS, NextJS, GatsbyJS" span="12"/>
          </li>
          <li>
            <SkillBar skill="NodeJS, Docker, Wordpress" span="6"/>
          </li>
          <li>
            <SkillBar skill="Typescript, Redux" span="6"/>
          </li>
          <li>
            <SkillBar skill="PHP, Nginx, SEO, Web Analytics" span="4"/>
          </li>
        </ul>
      </div>
    </ComponentWrapper>
  )
}

export default Skills