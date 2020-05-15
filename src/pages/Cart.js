import { connect } from 'react-redux';
import React, { Component } from 'react';
import MensagemCarrinho from '../components/CartMessage';
import NavBar from '../components/NavBar';

export class Cart extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <MensagemCarrinho />
      </div>
    );
  }
}

export default Cart;
