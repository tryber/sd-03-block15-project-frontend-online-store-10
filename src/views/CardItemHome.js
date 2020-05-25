import React from 'react';
import { Link } from 'react-router-dom';

class CardItemHome extends React.Component {
  render() {
    const { id, title, thumbnail, price } = this.props.item;
    const product = this.props.item;
    return (
      <div data-testid="product" >
      {id}
      {title}
      {thumbnail}
      {price}
      <Link data-testid="product-detail-link"  to={{ pathname: `/Detail`, state: { product } }}>detail</Link>
      </div>
    );
  }
}

export default CardItemHome;
