import React from 'react'
import './Featured.css'
import { quasim, shipra, lynn, molly, tyler, zel, maggie, mandy } from '../../assets'
import Speakers from '../Speakers/Speakers'

const featuredSpeaker = [
  {
    name: "Quasim Ashraf",
    position: "Head of Operations",
    link: "@ Ashraf",
    img: quasim
  },
  {
    name: "Shipra Kayan",
    position: "Lead Project Manager",
    link: "@ Kayan",
    img: shipra
  },
  {
    name: "Lynn Browning",
    position: "Director, Project Management",
    link: "@ Browning",
    img: lynn
  },
  {
    name: "Molly Quella",
    position: "Project Manager, Planning",
    link: "@ Quella",
    img: molly
  },
  {
    name: "Tyler Tolson",
    position: "Project Manager, Business",
    link: "@ Tolson",
    img: tyler
  },
  {
    name: "Zel Crampton",
    position: "Manager",
    link: "@ Crampton",
    img: zel
  },
  {
    name: "Maggie Davis",
    position: "VP",
    link: "@ Davis",
    img: maggie
  },
  {
    name: "Mandy Mekhail",
    position: "Director of Talent Development",
    link: "@ ClickUp",
    img: mandy
  }
];

const Featured = () => {
  return (
    <div className='feature__main'>
      <div className="feature__main-container">
        <h1 className='heading'>Featured Speakers</h1>
        <div className="feature__main-container_grid">
          {featuredSpeaker.map((speaker, index) => (
            <Speakers name={speaker.name} position={speaker.position} link={speaker.link} img={speaker.img} key={speaker.name + index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Featured