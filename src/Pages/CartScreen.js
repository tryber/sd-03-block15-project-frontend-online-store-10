import React from 'react';
import CartGrid from '../components/CartGrid';
import NavBar from '../components/NavBar';

class CartScreen extends React.Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div>
        <NavBar />
        <CartGrid cartItems={cartItems} />
      </div>
    );
  }
}

export default CartScreen;
