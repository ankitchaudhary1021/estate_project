import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Property Listed' subtitle='These are the properties which is recenlty has been uploaded and it is modern properties according to new trend and variation.' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
