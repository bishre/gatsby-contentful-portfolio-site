import React, { useEffect } from 'react'
import { Facebook, GitHub, LinkedIn } from "@mui/icons-material"
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

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
    <footer
      style={{
        fontSize: `var(--font-sx)`,
        padding: `var(--space-1)`,
      }}
      >
        <div ref={ref} className={`grid grid-cols-12 p-2 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <div className='col-start-1 col-span-6 lg:col-span-3 footer-stagger'>
            © {new Date().getFullYear()} &middot; Bibhor Shrestha
          </div>
          <div className='col-start-1 col-span-6 lg:col-start-4 lg:col-span-3 footer-stagger'>
            <a href="mailto:bibhorshrestha@gmail.com">bibhorshrestha@gmail.com</a>
          </div>
          <div className='col-start-1 col-span-6 lg:col-start-7 lg:col-span-3 footer-stagger'>
            <a href="tel:+358458748705">+358 458 748 705</a>
          </div>
          <div className='col-start-10 col-span-3 flex justify-around footer-stagger'>
            <a target="_blank" href="https://www.facebook.com/beev.strong/"><Facebook /></a>
            <a target="_blank" href="https://www.linkedin.com/in/bibhor-shrestha"><LinkedIn /></a>
            <a target="_blank" href="https://www.github.com/bishre">
              <GitHub />
            </a>
          </div>
        </div>
      </footer>
  )
}

export default Footer