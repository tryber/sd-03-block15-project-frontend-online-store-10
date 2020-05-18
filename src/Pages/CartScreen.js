import { connect } from 'react-redux';
import React from 'react';
import CartGrid from '../components/CartGrid';
import NavBar from '../components/NavBar';

class CartScreen extends React.Component {
  render() {
    const { cart } = this.props;
    return (
      <div>
        <NavBar />
        <CartGrid cart={cart} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ cart: state.cart });
export default connect(mapStateToProps)(CartScreen);

