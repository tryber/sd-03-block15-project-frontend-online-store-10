import React, { Component } from 'react';
import ShopCart from './ShopCart';
import SearchItems from './SearchItems';

class NavBar extends Component {
  render() {
    const { handleSearchSubmit, handleSearchInput, value } = this.props;
    return (
      <header>
        <nav className="navbar">
          <h1 className="">American Store</h1>
          <SearchItems
            onClick={() => handleSearchSubmit(value)}
            onChange={() => handleSearchInput(value)}
          />
          <ShopCart />
        </nav>
      </header>
    );
  }
}

export default NavBar;
