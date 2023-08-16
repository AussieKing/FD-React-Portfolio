//! PORTFOLIO

import React, { useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Navigation from '../Navigation'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [portfolio, setPortfolio] = useState([
    {
      title: 'Random Password Generator',
      description:
        'Generate random passwords based on your selected criterias!',
      imageUrl: 'https://media.giphy.com/media/B34skTNZtR7945bfmE/giphy.gif',
      projectUrl:
        'https://github.com/AussieKing/Not-So-Random-Password-Generator',
      appUrl: 'https://aussieking.github.io/Not-So-Random-Password-Generator/',
    },
    {
      title: 'To-Do List',
      description:
        'This To-Do app will run in the browser and feature dynamically updated HTML and CSS powered by JavaScript.',
      imageUrl: 'https://media.giphy.com/media/5gBb7Kt3KoH37Jtkl6/giphy.gif',
      projectUrl: 'https://github.com/AussieKing/King-To-Do-List',
      appUrl: 'https://aussieking.github.io/King-To-Do-List/',
    },
    {
      title: 'Technology Blog',
      description:
        'This blog was created using the MVC paradigm, Handlebars.js, and Sequelize, as a CMS-style blog site.',
      imageUrl: 'https://media.giphy.com/media/qgQGfATzGVE93ADx8D/giphy.gif',
      projectUrl: 'https://github.com/AussieKing/Techno-MVC',
      appUrl: "https://technoblog-mvc-e8059046d77a.herokuapp.com/",
    },
    {
      title: 'Weather Dashboard',
      description:
        'This handy app will display the current weather and a 5-day forecast for any city in the world, via API calls.',
      imageUrl: require('../../assets/images/open-weather-app.png'),
      projectUrl: 'https://github.com/AussieKing/Open-Weather-App',
      appUrl: 'https://aussieking.github.io/Open-Weather-App/',

    },
    {
      title: 'Workanize SQL Database',
      description:
        'This command-line application allows the user to view and manage the departments, roles, and employees in a company using MySQL database.',
      imageUrl: require('../../assets/images/workanize.png'),
      projectUrl: 'https://github.com/AussieKing/Workanize-SQL',
      appUrl: "https://drive.google.com/file/d/1NdbDG9-U93d8gOLwVWm6_kwpM_o6XywE/view",
    },
    {
      title: 'Note Taker',
      description:
        'This Heroku deployed app allows the user to write and save notes, using Express.js back end and will save and retrieve note data from a JSON file.',
      imageUrl: require('../../assets/images/note-taker.png'),
      projectUrl: 'https://github.com/AussieKing/Note-Taker-aka-ADHD-Savior',
      appUrl: "https://salty-woodland-83336.herokuapp.com/"
    },
  ])

  //! ERROR : Commenting out   
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 3000)

  //   return () => {
  //     clearTimeout(timer)
  //   }
  // }, [])

  return (
    <>
      <Navigation />
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h1 className="page-title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
              index={15}
            />
          </h1>
        </div>
        <div className="portfolio-projects">
          {portfolio.map((project, index) => (
            <div className="project-box" key={index}>
              <img
                src={project.imageUrl}
                alt={project.title}
                className="portfolio-image"
              />
              <div className="content">
                <h3 className="title">{project.title}</h3>
                <p className="description">{project.description}</p>
                <a
                  href={project.projectUrl}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Repo
                </a>
                <a
                  href={project.appUrl}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  View App
                </a>
              </div>
            </div>
          ))}
        </div>
        <Loader type="pacman" />
      </div>
    </>
  )
}

export default Portfolio
