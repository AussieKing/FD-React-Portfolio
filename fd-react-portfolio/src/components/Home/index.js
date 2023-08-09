import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import './index.scss';

const Home = () => {
    
    return (
        <div classname="container-home">
            <img src={Logo} alt='dev name' />
            <div classname="text-area">
                <h1>Hi, I'm Freddy
                </h1>
                <h2>Full Stack Web Developer</h2>
                <Link to='/contact' classname='flat-button'>Contact Me</Link>
            </div>
        </div>
    )
}

export default Home