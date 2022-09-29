import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <section>
        <div>
          <h1>Finance For Kids</h1>
          <p>
            Welcome to Finance For Kids.  A platform designed to equip kids with the skills and confidence to talk money and grow 
            their skills and knowledge of all things business and finance from younger ages.  Lets get kids talking about money
            and setting them up for a more successful earning and spending career
          </p>
          <div>
            <Link to="/">
              <button>Lets Go!</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
