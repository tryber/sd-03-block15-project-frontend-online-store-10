import React from 'react';
import CartItemCard from './ProductCard';
import { CardDeck } from 'react-bootstrap';

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
