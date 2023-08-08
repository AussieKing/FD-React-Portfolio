import './App.scss';  // changed the css to scss (sass preprocessor for css to make it easier to write css)
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

//! STEP 1: delete the placeholder code, and replace it with the following:
function App() {
  //! STEP 2: wrap the Layout component with the Routes component
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} />
        {/* <Route index path="/about" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} /> */}
    </Routes>
    </>
  );
}

export default App;
