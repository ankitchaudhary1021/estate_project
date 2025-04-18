import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>We have started this website for those who are really interested to buy and sell their properties. We have added a function by buyer can make bid for the property which they want to purchase.</p>
            <p>Our vision is to make market broker less because the seller and buyer have to pay the brokarage for their own property which unneccessary thing in the market.That is why our website is separate from real estate agents.</p>
            <p>In our site, Seller can directly post and share details of their property as well as a buyer can direclt contact with seller.</p>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
