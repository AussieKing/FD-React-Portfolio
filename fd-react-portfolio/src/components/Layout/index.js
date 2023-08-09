// this is the file for all of our components to be exported from
//! STEP 1: import the Navbar component
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation';
import './index.scss';

//! STEP 2: create a function that returns the layout component
const Layout = () => {
    return (
      <div className="App">
      <Navigation />
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>

        <Outlet />

        <span className="tags bottom-tags">&lt;/body&gt;</span>
        <br />
        <span className="tags bottom-html-tags">&lt;/html&gt;</span>
        {/*the above are html tags */}
      </div> 
    </div>

    );
  };

//! STEP 3: export the layout component
export default Layout;