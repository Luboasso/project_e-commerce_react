import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Miraculous Store</h1>
      <nav>
        <ul>
          <li><Link to="/">Shop</Link></li>
          {/* <li><Link to="/contact">Contact</Link></li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header