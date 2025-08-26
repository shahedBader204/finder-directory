
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav>
      <h1>Finder Directory</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/listings">Listings</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
