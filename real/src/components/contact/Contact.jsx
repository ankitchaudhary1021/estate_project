import React from "react"
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import "./contact.css"

const Contact = () => {
  return (
    <>
      <section className='contact mb'>
        <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
        <div className='container'>
          <form className='shadow' action="http://localhost:8056/cont" method="post">
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type='text' placeholder='Name' name="uname" />
              <input type='text' placeholder='Email' name="email" />
            </div>
            <input type='text' placeholder='Subject' name="sub" />
            <textarea cols='30' rows='10' name="sub"></textarea>
            <input type="submit" />
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
