import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  // Toogle Menu
  const [isActive, setIsActive] = useState(0)
  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex alignCenter'>
          {/* <div className='catgrories d_flex'>
            <span class='fa-solid fa-border-all'></span>
            <h4>
              Categories <i className='fa fa-chevron-down'></i>
            </h4>
          </div> */}

          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
              <li  >
                <Link to='/'>home</Link>
              </li>
              <li>
                <Link to='/pages' >Apple</Link>
              </li>
              <li>
                <Link to='/user'>SamSung</Link>
              </li>
              <li>
                <Link to='/vendor'>oppo</Link>
              </li>
              <li>
                <Link to='/track'>Xiaomi</Link>
              </li>
              <li>
                <Link to='/contact'>vivo</Link>
              </li>
              
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
