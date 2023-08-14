//! PORTFOLIO

import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import Navigation from "../Navigation";

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [portfolio, setPortfolio] = useState([
    {
      title: "Random Password Generator",
      description: "Generates a random password based on user-selected criteria...",
      imageUrl: "https://media.giphy.com/media/B34skTNZtR7945bfmE/giphy.gif",
      projectUrl: "https://github.com/AussieKing/Not-So-Random-Password-Generator",
    },
    {
      title: "To-Do List",
      description: "This app will run in the browser and feature dynamically updated HTML and CSS powered by JavaScript code...",
      imageUrl: "https://media.giphy.com/media/5gBb7Kt3KoH37Jtkl6/giphy.gif",  
      projectUrl: "https://github.com/AussieKing/King-To-Do-List"
    },
    {
      title: "Technology Blog",
      description: "This blog was created using the MVC paradigm, Handlebars.js, and Sequelize, as a CMS-style blog site...",
      imageUrl: "https://media.giphy.com/media/qgQGfATzGVE93ADx8D/giphy.gif",  
      projectUrl: "https://github.com/AussieKing/Techno-MVC"
    },
    {
      title: "Weather Dashboard",
      description: "This handy app will display the current weather and a 5-day forecast for any city in the world, using API calls...",
      imageUrl: "https://media.giphy.com/media/qgQGfATzGVE93ADx8D/giphy.gif",  
      projectUrl: "https://github.com/AussieKing/Open-Weather-App"
    },
    {
      title: "Workanize SQL Database",
      description: "This command-line application allows the user to view and manage the departments, roles, and employees in a company...",
      imageUrl: "./assets/images/workanize.png",  
      projectUrl: "https://github.com/AussieKing/Workanize-SQL"
    },
    {
      title: "Note Taker",
      description: "This Heroku deployed app allows the user to write and save notes, using Express.js back end and will save and retrieve note data from a JSON file...",
      imageUrl: "https://media.giphy.com/media/qgQGfATzGVE93ADx8D/giphy.gif",  
      projectUrl: "https://github.com/AussieKing/Note-Taker-aka-ADHD-Savior"
    },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
  <>
  <Navigation />
    <div className="portfolio-container">
      <div className="portfolio-header">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Portfolio".split("")}
            idx={15}
          />
        </h1>
      </div>
      <div className="portfolio-projects">
        {portfolio.map((project, index) => (
          <div className="project-box" key={index}>
            <img src={project.imageUrl} alt={project.title} className="portfolio-image" />
            <div className="content">
              <h3 className="title">{project.title}</h3>
              <p className="description">{project.description}</p>
              <a href={project.projectUrl} className="btn" target="_blank" rel="noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
      <Loader type="pacman" />
    </div>
    </>
  );
};

export default Portfolio;

