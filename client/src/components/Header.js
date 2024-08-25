import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/header.css';

const Header = () => {
  return (
    <div className='navigation'>
      <div className='nav-content'>
        <h1>COLLAB-TASK</h1>
        <span>-Student Project Management Hub</span>
      </div>
      <ul>
        <li>
          <Link to='/login'> {/* Use Link instead of button for navigation */}
            <button type="button">Login</button>
          </Link>
        </li>
        <li>
          <Link to='/signup'> {/* Use Link instead of button for navigation */}
            <button type="button">Sign Up</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
