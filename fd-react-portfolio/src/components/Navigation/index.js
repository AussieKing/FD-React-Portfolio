//! NAVIGATION

import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faBriefcase, faEnvelope, faFile, faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

const Navigation = () => { 
    const [navToggle, setNavToggle] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Determine the current path and set the active state accordingly
        if (location.pathname === "/about" || location.pathname === "/") {
            setActiveLink("about");
        } else if (location.pathname === "/portfolio") {
            setActiveLink("portfolio");
        } else if (location.pathname === "/contact") {
            setActiveLink("contact");
        } else if (location.pathname === "/resume") {
            setActiveLink("resume");
        }
    }, [location]);

    const [activeLink, setActiveLink] = useState("about"); // Set the initial active link here

    return (  
        <div className="nav-bar">
        {/* links to pages : includes a conditional activeClassName that is applied if the activeLink state is set to "about". 
            When the "About Me" link is clicked, the onClick handler updates the activeLink state to "about", 
            ensuring that it remains selected as the default active link when you navigate to the portfolio page for the first time.  */}
            <nav className={navToggle ? "mobile-show" : ""}>
                <NavLink exact to="/" activeClassName={activeLink === "about" ? "active" : ""} onClick={() => { setNavToggle(false); setActiveLink("about"); }}>
                    <FontAwesomeIcon icon={faHome} color='#bf9b30' />
                </NavLink>

                <NavLink activeClassName="active" to="/about" className='about-link' onClick={() => { setNavToggle(false); setActiveLink("about"); }}>
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
            <FontAwesomeIcon 
                onClick={() => setNavToggle(true)}
                icon={faBars}
                color="chocolate"
                size="3x"
                className='hamburger-icon'
            />
        </div>
    );
}

export default Navigation;
