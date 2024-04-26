import React from 'react'
import './Hero.css'
import '../../assets/index'
import { art00, icon00 } from '../../assets/index'

const Hero = () => {
  return (
    <div className='hero__main'>

      <div className="hero__main-container">
        
      <div className="hero__content">
          <h1>TECHNO FEST <br /> 2024</h1>

          <p>
          In the wilderness, they explored uncharted paths fueling a <br /> friendly competition as they raced for treasures, their bonds <br /> strengthening with every challenge overcome.
          </p>

          <input type="text" placeholder='Enter your work email' />

          <div className="hero__content-button">
            <button className='button__design'>Get Started</button>
            <h4>FREE FOREVER <br /> IF STUDENT</h4>
          </div>

          <div className="hero__content-rating">
            {[...Array(5)].map((_,index) => (
                <img key={index} src={icon00} alt='star' /> 
            ))}
            <p>Based on 10,000+ reviews on</p>
          </div>
      </div>


      <div className="hero__img">
            <img src={art00} alt="art00" />
      </div>

      </div>

    </div>
  )
}

export default Hero