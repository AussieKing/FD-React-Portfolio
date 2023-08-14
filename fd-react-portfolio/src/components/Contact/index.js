// CONTACT PAGE
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Navigation from '../Navigation'

const Contact = () => { 

    const [letterClass, setLetterClass] = useState('text-animate')  // setting the initial state to be the class that animates the letters
    const form = useRef()

  //! ERROR: it moves the title as it updates it after 3 seconds, so taking this out.
    useEffect(() => {
      return setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_1q2q9qo', 'template_1q2q9qo', form.current, 'user_1q2q9qo')
            .then((result) => {
                console.log(result.text) 
                window.location.reload(false)  // does not reload the page after the email is sent
            }, (error) => {
                console.log(error.text)
            }
        )
    }


      return (
      <> 
        <div className="contact-page">
            <Navigation />
            <div className="text-area">
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['G', 'e', 't', ' ', 'i', 'n', ' ', 'T', 'o', 'u', 'c', 'h']}  // setting the animation as a string array
                    index={15}   // 1.5 seconds delay in the animation
                    />
                </h1>
                  <p>Feel free to contact me for any questions or inquiries.</p>
                  <div className="contact-form">
                      <form ref={form} onSubmit={sendEmail}>
                          <ul>
                              <li className="half">
                                <input placeholder="Name" type="text" name="name" required />
                              </li>
                              <li className="half">
                                <input
                                  placeholder="Email"
                                  type="email"
                                  name="email"
                                  required
                                />
                              </li>
                              <li>
                                <input
                                  placeholder="Subject"
                                  type="text"
                                  name="subject"
                                  required
                                />
                              </li>
                              <li>
                                <textarea
                                  placeholder="Message"
                                  name="message"
                                  required
                                ></textarea>
                              </li>
                              <li>
                                <input type="submit" className="flat-button" value="SEND" />
                              </li>
                            </ul>
                      </form>
                  </div>
              </div>
          </div>
        <Loader type="pacman" />
      </>
    )
}   

export default Contact