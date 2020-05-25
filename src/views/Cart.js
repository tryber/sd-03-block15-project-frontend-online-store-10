import React from 'react';
import { Link } from 'react-router-dom';
import CardItemCart from './CardItemCart';
import * as cart from '../services/CartStorage';

class Cart extends React.Component {
  render() {
    if (cart.readMovies()) {
      const products = cart.readMovies();
      return (
        <div>
          {products.map((item) =>
            <CardItemCart
              key={item.id}
              item={item}
            />)}
          <Link data-testid="checkout-products" to={{ pathname: '/Checkout', state: { products } }}>checkout</Link>
        </div>
      );
    }
    return <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>;
  }
}

export default Cart;
