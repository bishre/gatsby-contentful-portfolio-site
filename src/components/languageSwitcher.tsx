import { Link } from 'gatsby'
import gsap from 'gsap'
import React, { useEffect } from 'react'

type Props = {}

const LanguageSwitcher = (props: Props) => {
  useEffect(() => {
    const textElements = document.querySelectorAll(".stagger")
    gsap.from(textElements, {
      duration: 0.4,
      opacity: 0,
      y: 50,
      stagger: 0.2,
      ease: "power2.out"
    })
  }, [])
  return (
    <div className='absolute top-20 z-10 right-20'>
        <Link to='/'><span className='p-4 stagger'>EN</span></Link>
        <Link to='/finnish'><span className='stagger'>FI</span></Link>
    </div>
  )
}

export default LanguageSwitcher