import React, { Component } from 'react';
import ShopCart from './ShopCart';
import SearchItems from './SearchItems';

class NavBar extends Component {
  render() {
    console.log(this.props);
    const { handleSearchSubmit, handleSearchInput, value } = this.props;
    return (
      <header>
        <nav className="navbar">
          <h1 className="">American Store</h1>
          <SearchItems handleSearchInput={handleSearchInput} />
          <ShopCart />
        </nav>
      </header>
    );
  }
}

export default NavBar;
