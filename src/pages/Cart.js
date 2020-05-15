import { connect } from 'react-redux';
import React, { Component } from 'react';
import MensagemCarrinho from '../components/CartMessage';
import NavBar from '../components/NavBar';
import CartUniqueItem from '../components/CartItem';

class Cart extends Component {
  render() {
    return (
      <div>
        <NavBar />
        {this.props.cart.map((item) => (
          <CartUniqueItem key={Math.random()} item={item} />
        ))}
        <MensagemCarrinho />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({ cart: state.cart });
export default connect(mapStateToProps)(Cart);
