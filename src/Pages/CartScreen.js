import React from 'react';
import CartGrid from '../components/CartGrid';

class CartScreen extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <CartGrid cartItems={cartItems} />
      </div>
    );
  }
}
