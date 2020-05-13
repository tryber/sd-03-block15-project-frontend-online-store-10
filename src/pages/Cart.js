import React, { Component } from 'react';
import MensagemCarrinho from '../components/CartMessage';

export class Cart extends Component {
  render() {
    return (
      <div>
        <MensagemCarrinho />
      </div>
    );
  }
}

export default Cart;
