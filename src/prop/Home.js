import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <nav className='navbar'>
        <div className="logo">Food Service</div>
        <div className="search-bar">
          <input type="text" placeholder="Search food,resturants" />
          <button type="button">Search</button>
        </div>
        <div className="logsign-buttons">
          <Link to="/login"><button type="button">Login</button></Link>
          <Link to="/signup"><button type="button">Signup</button></Link>
        </div>
    </nav>
    // <>
    // <div>
    //   {/* <Link to="/">Home</Link> */}
    //   <Link to="/login">Login</Link>
    // </div>
    // <div>
    //     <Link to="/signup">signup</Link>
    // </div>
    // </>
  );
};

export default Home;