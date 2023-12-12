import React from 'react'

type Props = {}

const AdditionalSkills = (props: Props) => {
  return (
    <div>
      <h2 className='text-3xl my-12'>Additional technologies and Skills</h2>
      <ul className='grid grid-cols-3 mx-60'>
        <li className='list-styles'><p>Git</p></li>
        <li className='list-styles'><p>Linux</p></li>
        <li className='list-styles'><p>B1 Finnish</p></li>
        <li className='list-styles'><p>MobX</p></li>
        <li className='list-styles'><p>Python</p></li>
        <li className='list-styles'><p>Django</p></li>
        <li className='list-styles'><p>A11y</p></li>
        <li className='list-styles'><p>Virtual Private Servers</p></li>
      </ul>
    </div>
  )
}

export default AdditionalSkills