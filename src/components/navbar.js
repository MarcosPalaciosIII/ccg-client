import React, { Component } from 'react';

import '../styles/navbar.css';

import { Link } from 'react-router-dom';


class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div>
          <Link to='/'> <img src="/images/petland.jpg" alt="petland logo" /> </Link>
        </div>
        <div>
          <Link to='#'>AVAILABLE PUPPIES</Link>
          <Link to='#'>PERKS</Link>
          <Link to='#'>BREEDS</Link>
          <Link to='#'>PRODUCTS</Link>
          <Link to='#'>CARES</Link>
          <Link to='#'>FINANCING</Link>
          <Link to='#'>ABOUT</Link>
          <Link to='#'>CONTACT</Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
