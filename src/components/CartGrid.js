import React from 'react';
import { CardDeck } from 'react-bootstrap';
import CartItemCard from './ProductCard';

class CartGrid extends React.Component {
  render() {
    const { cartItems } = this.props;
    return (
      <CardDeck>
        {cartItems.map((product) => (
          <CartItemCard key={product.id} product={product} />
        ))}
      </CardDeck>
    );
  }
}

export default CartGrid;
