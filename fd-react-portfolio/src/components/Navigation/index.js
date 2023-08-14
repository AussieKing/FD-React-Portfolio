//! NAVIGATION

// this file will be for the navbar component
//! STEP 1: import react and styles
import "./index.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";

// import fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faBriefcase, faEnvelope, faFile, faBars, faClose } from "@fortawesome/free-solid-svg-icons";
// import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";


//! STEP 2: create a function that returns the navbar component
const Navigation = () => { 
    const [navToggle, setNavToggle] = useState(false);

    return (  
    <div className="nav-bar">

{/* links to pages */}
        <nav className={navToggle? 'mobile-show' : ''}>
            <NavLink exact='true' activeClassName="active" to="/" onClick={() =>setNavToggle(false)}>
                <FontAwesomeIcon icon={faHome} color='#bf9b30' />
            </NavLink>

            <NavLink activeClassName="active" to="/about" className='about-link' onClick={() =>setNavToggle(false)}>
                <FontAwesomeIcon icon={faUser} color='#bf9b30'/>
            </NavLink>

            <NavLink activeClassName="active" to="/portfolio" className='portfolio-link' onClick={() =>setNavToggle(false)}>
                <FontAwesomeIcon icon={faBriefcase} color='#bf9b30' />
            </NavLink>

            <NavLink activeClassName="active" to="/contact" className='contact-link' onClick={() =>setNavToggle(false)}>
                <FontAwesomeIcon icon={faEnvelope} color='#bf9b30'/>
            </NavLink>

            <NavLink activeClassName="active" to="/resume" className='resume-link' onClick={() =>setNavToggle(false)}>
                <FontAwesomeIcon icon={faFile} color='#bf9b30'/>
            </NavLink>

            <FontAwesomeIcon onClick={() =>setNavToggle(false)} icon={faClose} color="#bf9b30" size="xs" className='close-icon' />
        </nav>

{/* liks to social media */}
        {/* <ul>
            <a href="https://www.linkedin.com/in/freddy-dordoni-7a57b213a/" target='_blank' rel='noreferrer'>
                 <FontAwesomeIcon icon={faLinkedin} color='#0072b1' />
            </a>
            <p></p>
            <a href="https://github.com/AussieKing" target='_blank' rel='noreferrer'>
                 <FontAwesomeIcon icon={faGithub} color='white' />
            </a>  
        </ul> */}
        <FontAwesomeIcon 
          onClick={() => setNavToggle(true)}
          icon={faBars}
          color="chocolate"
          size="3x"
          className='hamburger-icon' />
    </div>
    );
}


//! STEP 3: export the navbar component
export default Navigation;