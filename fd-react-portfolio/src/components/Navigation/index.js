// this file will be for the navbar component
//! STEP 1: import react and styles
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import LogoInit from "../../assets/images/logo-init.png";
import LogoWeb3 from "../../assets/images/logo-web3.png";

// import fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faBriefcase, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";


//! STEP 2: create a function that returns the navbar component
const Navigation = () => { 
    return (  //TODO: add the logo images commented out below
    <div className="nav-bar">
        <Link className="logo" to="/">
            {/* <img src={LogoInit} alt='logo-initials' className="logo-initials" />
            <img src={LogoWeb3} alt='AussieKing.eth' className="logo-web3"/> */}
        </Link>
{/* links to pages */}
        <nav>
            <NavLink exact='true' activeClassName="active" to="/">
                <FontAwesomeIcon icon={faHome} />
            </NavLink>

            <NavLink exact='true' activeClassName="active" to="/about" className='about-link'>
                <FontAwesomeIcon icon={faUser} />
            </NavLink>

            <NavLink exact='true' activeClassName="active" to="/portfolio" className='portfolio-link'>
                <FontAwesomeIcon icon={faBriefcase} />
            </NavLink>

            <NavLink exact='true' activeClassName="active" to="/contact" className='contact-link'>
                <FontAwesomeIcon icon={faEnvelope} />
            </NavLink>
        </nav>
{/* liks to social media */}
        <ul>
            <li>
                <a href="https://www.linkedin.com/in/freddy-dordoni-7a57b213a/" target='_blank' rel='noreferrer'>
                     <FontAwesomeIcon icon={faLinkedin} color='chocolate' />
                </a>
            </li>
            <li>
                <a href="https://github.com/AussieKing" target='_blank' rel='noreferrer'>
                     <FontAwesomeIcon icon={faGithub} color='chocolate' />
                </a>
            </li>
        </ul>
    </div>
    );
}


//! STEP 3: export the navbar component
export default Navigation;