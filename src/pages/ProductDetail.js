import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import { Media } from 'react-bootstrap';
import CartLink from '../components/CartLink';
import Rating from '../components/Rating';
import * as cartActions from '../actions/cart';

class ProductDetail extends React.Component {
  static addNewItem() {
    this.props.addToCart(this.props.location.state.product);
  }
  render() {
    const { product } = this.props.location.state;
    return (
      <div>
        <CartLink />
        <h4 data-testid="product-detail-name">{product.title}</h4>
        <ul className="list-unstyled">
          <Media as="li">
            <img
              width={128}
              height={128}
              className="mr-3"
              src={product.thumbnail}
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5>Marca: {product.attributes[0].value_name}</h5>
              <p>Modelo:{product.attributes[2].value_name}</p>
              <p>Aceita Mercado Pago: {product.accepts_mercadopago ? 'Sim' : 'Não'}</p>
              <p>
                Preço: {product.currency_id}:{product.price}
              </p>
            </Media.Body>
          </Media>
          <Rating />
          <button type="button" onClick={this.addNewItem} data-testid="product-detail-add-to-cart">
            Adicionar ao Carrinho
          </button>
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({ cart: state.cart });
const mapDispatchToProps = (dispatch) => bindActionCreators(cartActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
