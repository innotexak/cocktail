import React from 'react';
import { Link } from 'react-router-dom';

// import logo from '../logo.svg';
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <img
          src="https://cdn.dribbble.com/users/2689847/screenshots/7000352/media/d001c3d18bf4347c44dd257af4dd68e9.gif"
          alt="cocktails"
          className="logo"
          title="cool cocktail"
        />

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}
