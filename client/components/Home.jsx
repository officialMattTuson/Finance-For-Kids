import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <section className="hero-1 is-fullheight">
        <div className="hero-body">
          <div className="container ">
            <div className="columns ">
              <div className="column is-6">
                <div className="container is-flex-direction-column home-txt-btn">
                  <p className=" korero-title  is-size-1-tablet has-text-light my-6">
                    Finance For Kids
                  </p>
                  <div className=" box-home bd-notification has-text-white">
                    <p>
                      Welcome to Finance For Kids.  A platform designed to equip kids with the skills and confidence to talk money and grow 
                      their skills and knowledge of all things business and finance from younger ages.  Lets get kids talking about money
                      and setting them up for a more successful earning and spending career
                    </p>
                  </div>
                  <div>
                    <Link to="/stories">
                      <button className="button is-primary is-large my-6">
                        Lets Go!
                        <i className="fa-sharp fa-solid fa-arrow-right mx-2"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
