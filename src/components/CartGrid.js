import React from 'react';
import { CardDeck } from 'react-bootstrap';
import CartItemCard from './CartItemCard';
import InitialCartMessage from './InitialCartMessage';

class CartGrid extends React.Component {
  render() {
    const { cartItems } = this.props;
    return (
      <CardDeck>
        {cartItems === undefined ? <InitialCartMessage/ > : cartItems.map((product) => <CartItemCard product={product}/> )}
      </CardDeck>
    );
  }
}

export default CartGrid;
