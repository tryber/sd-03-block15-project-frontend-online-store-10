import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class CartLink extends Component {
  render() {
    return (
      <Link data-testid="shopping-cart-button" to="/cart">
        Carrinho
        <FontAwesomeIcon icon={faShoppingCart} />
      </Link>
    );
  }
}

export default CartLink;
