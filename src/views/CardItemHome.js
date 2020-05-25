import React from 'react';
import { Link } from 'react-router-dom';
import * as cart from '../services/CartStorage';

class CardItemHome extends React.Component {
  render() {
    const { id, title, thumbnail, price } = this.props.item;
    const product = this.props.item;
    return (
      <div data-testid="product">
        {id}
        {title}
        {thumbnail}
        {price}
        <Link data-testid="product-detail-link" to={{ pathname: '/Detail', state: { product } }}>detail</Link>
        <input type="button" data-testid="product-add-to-cart" onClick={() => cart.createMovie(product)} />
      </div>
    );
  }
}

export default CardItemHome;
