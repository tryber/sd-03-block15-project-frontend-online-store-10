import { connect } from 'react-redux';
import React from 'react';
import CartGrid from '../components/CartGrid';
import NavBar from '../components/NavBar';
import InitialCartMessage from '../components/InitialCartMessage';

class CartScreen extends React.Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div>
        <NavBar />
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        <CartGrid cartItems={cartItems} />
        {cartItems === 0 ? <InitialCartMessage /> : <CartGrid cartItems={cartItems} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ cart: state.cart });
export default connect(mapStateToProps)(CartScreen);

