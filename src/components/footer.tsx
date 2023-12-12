import React from 'react'
import { Facebook, GitHub, LinkedIn } from "@mui/icons-material"

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer
      style={{
        fontSize: `var(--font-sx)`,
        padding: `var(--space-1)`,
      }}
      >
        <div className='grid grid-cols-12 p-2'>
          <div className='col-start-1 col-span-3'>
            © {new Date().getFullYear()} &middot; Bibhor Shrestha
          </div>
          <div className='col-start-4 col-span-3'>
            <a href="mailto:bibhorshrestha@gmail.com">bibhorshrestha@gmail.com</a>
          </div>
          <div className='col-start-7 col-span-3'>
            <a href="tel:+358458748705">+358 458 748 705</a>
          </div>
          <div className='col-start-10 col-span-3 flex justify-around'>
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