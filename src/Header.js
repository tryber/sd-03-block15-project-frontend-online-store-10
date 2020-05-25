import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="movie-card-header">
        <Link className="page-title" to="/">Home</Link>
    </header>
  );
}

export default Header;
