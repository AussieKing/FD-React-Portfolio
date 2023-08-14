import './index.scss';
import { useEffect, useState } from 'react';
import Navigation from '../Navigation';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate')  // setting the initial state to be the class that animates the letters

  //! ERROR: it moves the title as it updates it after 3 seconds, so taking this out.
  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <div className="about-page">
      <Navigation />
      <div className="text-area">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e', ' ']}
            index={15}
            />
            </h1>
            <h2>
              <p>
                I'm a freshly graduated full stack developer looking for an exciting career change, and for an 
                opportunity to work with the latest
                technologies, including React, Node.js, and MongoDB or any Blockchain related projects.
              </p>
              <p align="LEFT">
                  I'm naturally extrovert, always curious, and constantly teaching myself a new skill, 
                  reading a new book, or outdoor exercising. 
                  Oh, and coding of course!
              </p>
              <p>
                My family is my biggest motivation, and I'm always looking for ways to improve myself and
                my skills to provide them with a better life.
                I love cooking (sounds cliche, but I do!), and I'm always looking for new recipes to try.
                When I'm not coding, you'll find me outdoor exercising, taking photos, or playing with my son.
              </p>
            </h2>
        </div>
        <Loader type="pacman" />
    </div>
    );
};

export default About