//! ABOUT

import React, { useState } from 'react';
import Loader from 'react-loaders';
import Navigation from '../Navigation';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import avatar from '../../assets/images/avatar.png';
import { Container, Row, Col, Image } from 'react-bootstrap';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  //! ERROR : Commenting out 
  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover');
  //   }, 3000);
  // }, []);

  return (
    <div className="about-page">
      <Navigation />

      <Container>
        <Row>
          <Col md={9} xs={12}>
            <div className="text-area">
              <h1>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e', ' ']}
                  index={15}
                />
              </h1>
              <div className="h2-container">
                <h2>
                  <p>
                    I'm a freshly graduated full stack developer looking for an exciting career change, and for an
                    opportunity to work with the latest technologies, including React, Node.js, and MongoDB or any
                    Blockchain related projects.
                  </p>
                  <p align="LEFT">
                    I'm naturally extrovert, always curious, and constantly teaching myself a new skill, reading a new
                    book, or outdoor exercising. Oh, and coding of course! 
                    I love reading self-development books, trading charts (forex and crypto), and explore new technologies
                  </p>
                  <p>
                    My family is my biggest motivation, and I'm always looking for ways to improve myself and my skills
                    to provide them with a better life. I love cooking (sounds cliche, but I do!), and I'm always
                    looking for new recipes to try. When I'm not coding, you'll find me outdoor exercising, taking
                    photos, or playing with my son.
                  </p>
                </h2>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div className="image-container">
              <Image src={avatar} rounded className="about-image" />
            </div>
          </Col>
        </Row>
      </Container>

      <Loader type="pacman" />
    </div>
  );
};

export default About;