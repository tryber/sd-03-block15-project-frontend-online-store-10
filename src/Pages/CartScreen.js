import React from 'react';
import CartGrid from '../components/CartGrid';
import NavBar from '../components/NavBar';
import InitialCartMessage from '../components/InitialCartMessage'

class CartScreen extends React.Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div>
        <NavBar />
        {cartItems === 0 ? <InitialCartMessage /> : <CartGrid cartItems={cartItems} />}
      </div>
    );
  }
}

export default CartScreen;
