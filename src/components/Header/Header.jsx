import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Miraculous Store</h1>
      <nav>
        <ul>
            <li><Link to="/home">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
           <li><Link to="/contact">Contact</Link></li> 
           <li><Link to="/signup">Sign up</Link></li> 
           <li><Link to="/login">Log in</Link></li> 
           <li><Link to="/cart">Cart</Link></li> 
           <li><Link to="/profile">Profile</Link></li> 
        </ul>
      </nav>
    </header>
  );
};

export default Header