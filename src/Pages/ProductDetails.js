import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import NavBar from '../components/NavBar';
import Rating from '../components/Rating';
import * as cartActions from '../actions/cart';
import '../App.css';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.addNewItem = this.addNewItem.bind(this);
  }

  addNewItem() {
    this.props.addToCart(this.props.location.state.product);
  }

  render() {
    const { product } = this.props.location.state;
    return (
      <div>
        <NavBar />
        <h2 className="text-center">Detalhes do produto </h2>
        <div>
          <img className="productDetails" src={product.thumbnail} alt="foto produto" />
        </div>
        <Card className="text-center">
          <h3 data-testid="product-detail-name">{product.title}</h3>
          <p>descrição</p>
          Bagatela de
          <p>
            {product.currency_id}: {product.price}
          </p>
        </Card>
        <div>
          <button data-testid="product-detail-add-to-cart" type="button" onClick={this.addNewItem}>
            Adicionar ao carrinho
          </button>
          <Rating />
        </div>
        <Link to="/">Página inicial</Link>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({ cart: state.cart });
const mapDispatchToProps = (dispatch) => bindActionCreators(cartActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
