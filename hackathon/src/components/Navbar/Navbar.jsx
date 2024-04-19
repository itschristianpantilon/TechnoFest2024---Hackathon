import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (
    <header>
      <div className="header__container-discover">
        <h3>A gleam of excitement, declare, "Adventure awaits! Let's chase it down!"</h3>
        <button type='button' className='button__design'>Discover</button>
      </div>
      <div className="header__container-main">
        <div className="header__container-main_logo">
          <h1>TechnoFest</h1>
          <a href="#">Articles</a>
        </div>
        <button type='button' className='button__design'>Register</button>
      </div>
    </header>
  )
}

export default Navbar