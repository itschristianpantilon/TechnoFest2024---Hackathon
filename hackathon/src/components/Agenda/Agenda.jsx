import React from 'react'
import './Agenda.css'
import { quasim, shipra, lynn, molly, tyler, zel, maggie, mandy } from '../../assets'


const Agenda = () => {
  return (
    <div className='agenda__main'>
      <div className="agenda__main_container">
        <h1 className="heading">Agenda</h1>
        <div className="agenda__main_container-content">

          <div className="agenda__main-content1">
              <div className="agenda__main-content1-text">
                <h2>Opening Statements</h2>
                <p><span>Quasim Ashraf,</span> Head of Operations</p>
              </div>
              <img src={quasim} alt="quasim" />
          </div>

            <div className="agenda__main-content2">
              <div className="agenda__main-content2-text">
                <h2>Techno Fest 2024 - "TechTrek: Explore, <br />Complete, Connect"</h2>
                <p><span>Shipra Kayan, </span>Lead Project Manager</p>
                <p><span>Lynn Browning, </span>Director, Project Management</p>
                <p><span>Molly Quella, </span>Project Manager, Planning</p>
                <p><span>Tyler Tolson, </span>Project Manager, Business</p>
              </div>
              <div className="agenda__main-content2-img">
                <img src={shipra} alt="pictures" />
                <img src={lynn} alt="pictures" />
                <img src={molly} alt="pictures" />
                <img src={tyler} alt="pictures" />
              </div>
            </div>

          <div className="agenda__main-content3">
            <div className="agenda__main-content3-text">
              <h2>Bringing It All Together: Work <br />Management Efficiency Secrets for <br />Multiple Projects & Teams</h2>
              <p><span>Zel Crampton, </span>Manager</p>
              <p><span>Maggie Davis, </span>VP</p>
              <p><span>Mandy Mekhail, </span>Director of Talent Development</p>
            </div>

            <div className="agenda__main-content3-img">
              <img src={zel} alt="pictures" />
              <img src={maggie} alt="pictures" />
              <img src={mandy} alt="pictures" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Agenda