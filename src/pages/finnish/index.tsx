import React from 'react'
import Layout from '../../components/layout'
import Hero from '../../components/hero'
import About from '../../components/about'

type Props = {}

const Index = (props: Props) => {
  const heroImage = {"file": { "url": "//images.ctfassets.net/jmqpmhd6e4pl/1Mm2UYwgshJErJPc4zJZ7x/3bb486e9a64c427617c3432f7cc3a191/hero-image-2.jpg"}}
  return (
    <Layout>
      <Hero
        title="Bibhor Shrestha"
        description="Kokenut Web Kehittäjä Helsingistä"
        heroImage={heroImage}
      />
    </Layout>
  )
}

export default Index