import React from 'react';
import { CardDeck } from 'react-bootstrap';
import CartItemCard from './CartItemCard';
import InitialCartMessage from './InitialCartMessage';

class CartGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartLength : this.props.cart.length
    }
  }
  render() {
    const { cart } = this.props;
    console.log(this.state.cartLength)
    
    return (
      <CardDeck>
        {cart.length === 0 ? (
          <InitialCartMessage />
        ) : (
          cart.map((product) => <CartItemCard key={product.id} product={product} />)
        )}
      </CardDeck>
    );
  }
}

export default CartGrid;
