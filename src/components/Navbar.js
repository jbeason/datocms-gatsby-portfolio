import React from 'react'
import Link from 'gatsby-link'
import MenuButton from '../components/MenuButton'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = () => (
  <div>
    <h1 id="logo">
          <Link to="/" className="navbar-item">
            <figure className="image">
              <img src={logo} alt="The Beason Company" />
            </figure>
          </Link>
    </h1>
    <div id="menu-button">
      <div className="cursor"> 
        <div id="nav-button"> <span className="nav-bar"></span> <span className="nav-bar"></span> <span className="nav-bar"></span> </div>
      </div>
    </div>
    <header>
      <div id="white-background">
        <div className="navbar-brand">
          
        </div>
        <nav id="main-nav">
          <ul className="option-set" data-option-key="filter">
            <li><Link className="navbar-item" to="/about">About</Link></li>
            <li><Link className="navbar-item" to="/projects">Projects</Link></li>
            <li> <a href="#" className="sub-nav-toggle">Services <i className="fas fa-angle-down is-pulled-right"></i></a>
              <ul className="sub-nav hidden">
                <li> <Link className="navbar-item" to="/websites">Web Services</Link> </li>
                <li> <Link className="navbar-item" to="/photography">Photography</Link> </li>
              </ul>
            </li>
            <li><Link className="navbar-item" to="/contact">Contact</Link></li>
          </ul>  
        </nav>
        <div id="bottom-header">
          <ul className="social-list">
            <li> <a href="#"><i className="fab fa-twitter"></i></a> </li>
            <li> <a href="#"><i className="fab fa-instagram"></i></a> </li>
            <li> <a href="#"><i className="fab fa-linkedin"></i></a> </li>
          </ul>
          {/* <p>&copy; {new Date().getFullYear()} The Beason Company</p> */}
          <p>{data.datoCmsHome.copyright}</p>
        </div>
      </div>
    </header>
  </div>  
)

export default Navbar
