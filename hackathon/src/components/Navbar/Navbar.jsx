import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (
    <header>
      <div className="header__container-discover">
        <h3>A gleam of excitement, declare, "Adventure awaits! Let's chase it down!"</h3>
        <button type='button' className='button__design' onClick={() => {document.location.href="/discover"}}>Discover</button>
      </div>
      
      <div className="header__container-main">
        <div className="header__container-main_logo">
          <h1 onClick={() => {document.location.href="/home"}}>TechnoFest</h1>
          <a href="#">Articles</a>
        </div>
        <button type='button' className='button__design' onClick={() => {document.location.href="/register"}}>Register</button>
      </div>
    </header>
  )
}

export default Navbar