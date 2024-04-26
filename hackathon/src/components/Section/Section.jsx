import React from 'react'
import './Section.css'
import { sectionIbm, sectionLogitech, sectionTibc } from '../../assets'

const Section = () => {
  return (
    <div className='section__main'>
      <div className="section__main-container">
          <img src={sectionIbm} alt="ibm" />
          <img src={sectionLogitech} alt="logitech" />
          <img src={sectionTibc} alt="tibc" />
      </div>
    </div>
  )
}

export default Section