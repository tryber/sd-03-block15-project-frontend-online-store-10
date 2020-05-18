import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

class ShopCart extends Component {
  render() {
    return (
      <div className="iconCart">
        <Link data-testid="shopping-cart-button" to="/shoppingCart">
          <ShoppingCartIcon />
        </Link>
      </div>
    );
  }
}

export default ShopCart;
