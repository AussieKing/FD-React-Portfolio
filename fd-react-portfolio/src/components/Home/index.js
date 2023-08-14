import { useEffect, useState } from 'react'
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Navigation from '../Navigation';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')  // use the useState hook to set the state
    // create 2 arrays for the words to animate
    const strArray1 = ['H','i', ",", "", 'I',"'m",' ','F', 'r', 'e', 'd', 'd', 'y']   
    const jobArray = ['Full Stack Web Developer']
    const available = ['Available for hire']
    
    useEffect(() => {  // use the useEffect hook to set the timeout
        return setTimeout(() => {
            setLetterClass('text-animate done')  // set the state to the class name with the animation
        }, 4000)
    }, [])  // pass an empty array as the second argument to the useEffect hook, so that it only runs once

    return (
        <>
        <div className="container-home">
            <div classname='text-area'>
                <p>
                <img src={Logo} alt='dev name' />
                <h1>
                <Navigation />
                {/* <img src={Logo} alt='dev name' />
                <div className="text-area"> */}
                <AnimatedLetters letterClass={letterClass} strArray={strArray1} index={1} />  {/* pass the props to the component */}
                <br />
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} index={2} />  {/* pass the props to the component */}
                </h1>
                <h2>
                <AnimatedLetters letterClass={letterClass} strArray={available} index={4} />  {/* pass the props to the component */}
                </h2>
                <Link to='/contact' classname='flat-button'>Contact Me</Link>
                </p>
            </div>
        </div>
        <Loader type="pacman" />;
        </>
    )
}

export default Home