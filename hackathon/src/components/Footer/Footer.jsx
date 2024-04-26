import React from 'react'
import './Footer.css'
import { icon01, icon02, icon03, icon04 } from '../../assets';

const links = [
  {
    title: "TechnoFest",
    link1: "Download",
    link2: "About Us",
    link3: "Community",
    link4: "Customers"
  },
  {
    title: "Articles",
    link1: "Help Docs",
    link2: "On-Demand Demo",
    link3: "ClickUp University",
    link4: "Webinars"
  },
  {
    title: "",
    link1: "Gantt Chart",
    link2: "Dashboards",
    link3: "Native Time Tracking",
    link4: "Mind Maps"
  }
];

const FooterContent = ({ title, link1, link2, link3, link4 }) => (
  <div className="footer__main-container_content">
    <h3>{title}</h3>
    <p>{link1}</p>
    <p>{link2}</p>
    <p>{link3}</p>
    <p>{link4}</p>
  </div>
)

const Footer = () => {
  return (
    <div className='footer__main'>
      <div className="footer__main-container">
        {links.map((item, index) => (
          <FooterContent key={item.link1 + index} title={item.title} link1={item.link1} link2={item.link2} link3={item.link3} link4={item.link4} />
        ))}
      </div>

      <div className="footer__main-bottom_container">
        <div className="footer__main-bottom_container-text">
          <h1>TechnoFest</h1>
          <p>© 2024 TechnoFest | Security | Your Privacy | Terms</p>
        </div>
        <div className="footer__main-bottom_container-links">
          <img src={icon01} alt="icons" />
          <img src={icon02} alt="icons" />
          <img src={icon03} alt="icons" />
          <img src={icon04} alt="icons" />
        </div>
      </div>
    </div>
  )
}

export default Footer