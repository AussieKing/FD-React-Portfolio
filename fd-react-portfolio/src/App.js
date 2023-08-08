import logo from './logo.svg';
import './App.scss';  // changed the css to scss (sass preprocessor for css to make it easier to write css)
import { Route, Routes } from 'react-router-dom';

//! STEp 1: delete the placeholder code, and replace it with the following:
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
    </Routes>
    </>
  );
}

export default App;
