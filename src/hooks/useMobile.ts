import { useEffect, useState } from "react"

const useMobile = () => {
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth <= 768) {
      setIsMobile(true)
    }
    const handleResize = () => {
      if (typeof window !== "undefined" && window.innerWidth <= 768) {
        setIsMobile(true)
      } else if (window.innerWidth > 768) {
        setIsMobile(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return isMobile

}

export default useMobile