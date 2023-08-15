import React from 'react'
import { createRoot } from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// ReactDOM.render(  // wrap App in BrowserRouter to enable routing
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>,
//   </React.StrictMode>,
//   document.getElementById('root')
// )
// old version of React. Change let's change this to the new React syntax/structure, using the root div in the public/index.html file.
createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
