import React from 'react'
import './Speakers.css'

const Speakers = ({ name, position, link, img }) => {
  return (
    <div className='feature__main-content'>
        <div className="feature__main-content_img">
            <img src={img} alt="speakerImg" />
        </div>
        <div className="feature__main-content_text">
            <h3>{name}</h3>
            <p>{position}</p>
            <h5>{link}</h5>
        </div>
    </div>
  )
}

export default Speakers