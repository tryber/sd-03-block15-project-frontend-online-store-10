import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import NavBar from './NavBar';


class ShopCart extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
        <Link to='/shoppingCart'>
          <ShoppingCartIcon />
          <button data-testid="shopping-cart-button" />
        </Link>
      </div>
    );
  }
}

export default ShopCart;
