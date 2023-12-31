//! APP.js

import { Route, Routes } from 'react-router-dom';  // import the Route and Routes components from react-router-dom
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import './App.scss';  // changed the css to scss (sass preprocessor for css to make it easier to write css)


//! STEP 1: delete the placeholder code, and replace it with the following:
function App() {
  //! STEP 2: wrap the Layout component with the Routes component
  return (   // import the single Routes and wrap them Routes component
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="resume" element={<Resume />} />
    </Routes>
    </>
  );
}

export default App;
