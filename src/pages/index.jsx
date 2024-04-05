import React from "react"
import Layout from "../components/layout"
import "../css/global.css"
import Hero from "../components/hero"
import AboutSection from "../components/landing/about"
import MissionSection from "../components/landing/mission"
const Index = () => {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <MissionSection />
    </Layout>
  )
}

export default Index
