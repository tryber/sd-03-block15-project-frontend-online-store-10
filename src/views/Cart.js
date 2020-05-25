import React from 'react';
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
        </div>
      );
    }
    return <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>;
  }
}

export default Cart;
