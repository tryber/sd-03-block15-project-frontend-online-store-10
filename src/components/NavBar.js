import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShopCart from './ShopCart';
import SearchItems from './SearchItems';

class NavBar extends Component {
  render() {
    const { handleSearchSubmit } = this.props;

    return (
      <header>
        <nav className="navbar">
          <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
            <h1 className="">American Store</h1>
          </Link>
          <SearchItems handleSearchSubmit={handleSearchSubmit} />
          <ShopCart />
        </nav>
      </header>
    );
  }
}

export default NavBar;
