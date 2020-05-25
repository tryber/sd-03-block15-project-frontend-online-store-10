import React from 'react';
import { Link } from 'react-router-dom';
import * as cart from '../services/CartStorage';


class DetailProduct extends React.Component {
  render() {
    const product = this.props.location.state.product;
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/Cart">carrinho</Link>
        <h1 data-testid="product-detail-name">{product.title}</h1>
        <input
          type="button"
          data-testid="product-detail-add-to-cart"
          value="add"
          onClick={() => cart.createMovie(product)}
        />
        <input
          type="text"
          data-testid="product-detail-evaluation"
          value="Esta é uma avaliação sobre o produto realizada na tela de detalhe."
        />
      </div>
    );
  }
}

export default DetailProduct;
