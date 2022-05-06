import React from 'react';
import { Link } from "react-router-dom";
import './header.css';

const Header = ({ page }: any) => {
  return (
    <div className='header'>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/products">Products</Link>
        <Link to={page}>Page</Link>
      </nav>
    </div>
  );
};

export default Header;
