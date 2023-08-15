//! ANIMATED LETTERS

import './index.scss';
import React from 'react';

// we'll take 3 arguments, the class name, the string to animate, and the index (the starting point, to set the delay on the animation)
const AnimatedLetters = ({ letterClass, strArray, index }) => {
    return (  // return a span so that it is an inline element, to form the word
      <span>
        {strArray.map((char, i) => (  // mapping, using the letters and the index to set the delay
        // inside of the span, give it a key (a letter + the index), the class name (received in the props), and the letter itself
          <span key={char + i} className={`${letterClass} _${i + index}`}>   
            {char}
          </span>
        ))}
      </span>
    )
  }
  
  // Export the component
  export default AnimatedLetters