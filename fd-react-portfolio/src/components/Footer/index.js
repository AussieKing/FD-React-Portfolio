// //! FOOTER

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./index.scss";

const socialsLink = [
  {
    name: "GitHub",
    url: "https://github.com/AussieKing",
    icon: faGithub,
    color: "white",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/freddy-dordoni-7a57b213a/",
    icon: faLinkedin,
    color: "#0072b1",
  },
];

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white">
      <div className="footer-container">
        <section className="social-icons-wrapper d-flex justify-content-center">
          {socialsLink.map(({ name, url, icon, color }) => (
            <div
              key={name}
              className="d-flex flex-column align-items-center mx-2 transparent-bg"
            >
              <a
                href={url}
                className={`icon ${name}`}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={icon}
                  bounce
                  className="footer-icon-size"
                  style={{ color: color }}
                />
              </a>
              <a href={url} target="_blank" rel="noreferrer">
                <span className="d-inline-block mx-1 name">{name}</span>
              </a>
            </div>
          ))}
        </section>
        <section className="form-footer">
          <h6 className="designer-text">Designed by Aussie King</h6>
          <p>
            <h6 className="copyright-text">
              &copy; {new Date().getFullYear()} All rights reserved.
            </h6>
          </p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
