import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './index.scss'
import PDF from '../../assets/images/Federico Dordoni CV resume 2023 Dev.pdf'
import Navigation from '../Navigation'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import Footer from '../Footer'

const Resume = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <div className="about-page">
      <Navigation />

      <Container>
        <Row>
          <Col md={9}>
            <div className="text-area">
              <h1>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={['R', 'e', 's', 'u', 'm', 'e']}
                  index={15}
                />
              </h1>
              <div className="h2-container">
                <div className="title">
                  <h1>
                    {' '}
                    <AnimatedLetters
                      letterClass={letterClass}
                      strArray={[
                        'T',
                        'e',
                        'c',
                        'h',
                        'n',
                        'i',
                        'c',
                        'a',
                        'l',
                        ' ',
                        'S',
                        'k',
                        'i',
                        'l',
                        'l',
                        's',
                      ]}
                      index={15}
                    />
                  </h1>
                </div>
                <h2>Languages:</h2>
                <h3>JavaScript, HTML, CSS</h3>
                <hr className="star-secondary" />
                <h2>Computer Science applied to JavaScript:</h2>
                <h3>
                  Algorithms, Efficiency, Time Complexity, Big O Notation, Data
                  Structures
                </h3>
                <hr className="star-secondary" />
                <h2>Libraries/Frameworks:</h2>
                <h3>
                  React, jQuery, Bootstrap, HTML, Bootstrap, Handlebars,
                  Local/Session Storage, IndexedDB
                </h3>
                <hr className="star-secondary" />
                <h2>Server Side Development:</h2>
                <h3>
                  Node.js, Express.js, User Authentication, Progressive Web
                  Applications (PWAs), MERN Stack
                </h3>
                <hr className="star-secondary" />
                <h2>API Interaction:</h2>
                <h3> API, JSON, AJAX, REST</h3>
                <hr className="star-secondary" />
                <h2>Databases:</h2>
                <h3>MongoDB, MySQL</h3>
                <hr className="star-secondary" />
                <h2>Quality Assurance:</h2>
                <h3>
                  Unit Testing, Functional Testing, Linting, Continuous
                  Integration
                </h3>
                <hr className="star-secondary" />
                <h2>Tools/Platforms:</h2>
                <h3>Git, GitHub, Heroku</h3>
              </div>
              <p className="space"></p>
              <h1>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={['E', 'd', 'u', 'c', 'a', 't', 'i', 'o', 'n']}
                  index={15}
                />
              </h1>
              <hr className="star-secondary" />
              <div className="resume-item">
                <h3>Diploma in Business Management</h3>
                <h4>Australian Pacific College, 2009-2012</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <p className="space"></p>
              <h1>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
                  index={15}
                />
              </h1>
              <hr className="star-secondary" />
              <div className="resume-item">
                <h3>Assistant Category Manager</h3>
                <h4>Endeavor Group Pty Ltd (Dan Murphy's), 2020-present</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <p className="space"></p>
              <h1>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={[
                    'P',
                    'r',
                    'o',
                    'f',
                    'i',
                    'c',
                    'i',
                    'e',
                    'n',
                    'c',
                    'i',
                    'e',
                    's',
                  ]}
                  index={15}
                />
              </h1>
              <ul>
                <h3>
                  <li>HTML/CSS</li>
                  <li>JavaScript</li>
                  <li>SQL</li>
                  <li>
                    <span className="gold-color">M</span>
                    ongoDB
                  </li>
                  <li>
                    <span className="gold-color">E</span>xpress
                  </li>
                  <li>
                    <span className="gold-color">R</span>eact
                  </li>
                  <li>
                    <span className="gold-color">N</span>ode.js
                  </li>
                </h3>
              </ul>

              <hr className="star-primary" />
              <Button
                variant="dark"
                href={PDF}
                download
                className="download-resume"
              >
                Download Resume
              </Button>
            </div>
          </Col>
          <Col md={3}>
            <div></div>
          </Col>
        </Row>
      </Container>
      <Loader type="pacman" />
    </div>
  )
}

export default Resume
