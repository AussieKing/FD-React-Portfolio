import './index.scss';
import { useEffect, useState } from 'react';
import Navigation from '../Navigation';
// import Loader from 'react-loaders'
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
                I'm a very ambitious front-end developer looking for a role in an
                established IT company with the opportunity to work with the latest
                technologies on challenging and diverse projects.
              </p>
              <p align="LEFT">
                  I'm quiet confident, naturally curious, and perpetually working on
                  improving my chops one design problem at a time.
              </p>
              <p>
                If I need to define myself in one sentence that would be a family
                person, father of a beautiful daughter, a sports fanatic,
                photography enthusiast, and tech-obsessed!!!
              </p>
            </h2>
        </div>
    </div>
    );
};

export default About