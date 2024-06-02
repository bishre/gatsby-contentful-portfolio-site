import React, { useEffect } from 'react'
import { Facebook, GitHub, LinkedIn } from "@mui/icons-material"
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import ComponentWrapper from './componentWrapper';

type Props = {}

const Footer = (props: Props) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 1
  });

  useEffect(() => {
    if (!inView) return
    const textElements = document.querySelectorAll(".footer-stagger")
    gsap.from(textElements, {
      duration: 0.4,
      opacity: 0,
      y: 50,
      stagger: 0.1,
      ease: "power2.out"
    })
  }, [inView])
  return (
    <footer>
      <ComponentWrapper>
        <div ref={ref} className={`flex items-end justify-between ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <div className='flex flex-col lg:flex-row text-sm'>
            <p className='footer-stagger lg:mr-12'>© {new Date().getFullYear()} &middot; Bibhor Shrestha</p>
            <a className='footer-stagger lg:mr-12' href="mailto:bibhorshrestha@gmail.com">bibhorshrestha@gmail.com</a>
            <a className='footer-stagger' href="tel:+358458748705">+358 458 748 705</a>
          </div>
          <div className='flex justify-around footer-stagger'>
            <a className='mr-4' target="_blank" href="https://www.facebook.com/beev.strong/"><Facebook /></a>
            <a className='mr-4' target="_blank" href="https://www.linkedin.com/in/bibhor-shrestha"><LinkedIn /></a>
            <a target="_blank" href="https://www.github.com/bishre">
              <GitHub />
            </a>
          </div>
        </div>
      </ComponentWrapper>
    </footer>
  )
}

export default Footer