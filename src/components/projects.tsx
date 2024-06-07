import { graphql, useStaticQuery } from 'gatsby'
import React, { useEffect } from 'react'
import ComponentWrapper from './componentWrapper'
import { useInView } from 'react-intersection-observer'
import Project from './project'
import gsap from 'gsap'


const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1
  })

  useEffect(() => {
    if (inView) {
      gsap.fromTo(
        '.project',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 1 }
      );
    }
  }, [inView])

  const data = useStaticQuery(graphql`
    query {
      allContentfulProject {
      edges {
        node {
          title
          description
          link
          image {
            file {
              url
            }
          }
        }
      }
    }
    }
  `)
  const { allContentfulProject } = data
  const projectEntries = allContentfulProject.edges
  return (
    <ComponentWrapper>
      <h2 id="work" className='text-xl md:text-2xl lg:text-4xl my-12'>Projects & Websites</h2>
      <ul ref={ref} className='grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:gap-8'>
      {projectEntries.map(({ node }, i) => (
        <li className='project opacity-0' key={i}>
          <Project node={node}/>
        </li>
      ))}
      </ul>
    </ComponentWrapper>
  )
}

export default Projects