import React from 'react'
import Hero from './hero/Hero'
import Featured from "../home/featured/Featured"
import Recent from "../home/recent/Recent"
import Awards from "../home/awards/Awards"
import Location from "../home/location/Location"
import Team from './team/Team'




const Home = () => {
  return (
    <div>
      <Hero/>
      <Featured/>
      <Recent/>
      <Awards/>
      <Location/>
      <Team/>
    </div>
  )
}

export default Home
