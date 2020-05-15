import { connect } from 'react-redux';
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export class CardProduts extends Component {
  render() {
    const { product, addToCart } = this.props;
    const { id, title, thumbnail, price } = product;
    return (
      <Card className="text-center" border="dark" style={{ width: '18rem' }} data-testid="product">
        <Card.Img variant="top" src={thumbnail} alt={title} />
        <Card.Body>
          <Card.Title>
            <Link
              to={{ pathname: `/itemdetail/${id}`, state: { product } }}
              data-testid="product-detail-link"
            >
              {title}
            </Link>
          </Card.Title>
          <h6 className="mb-2">{id}</h6>
          <h6>{price}</h6>
          <button type="button" onClick={() => addToCart} data-testid="product-add-to-cart">
            Adicionar ao Carrinho
          </button>
        </Card.Body>
      </Card>
    );
  }
}

export default CardProduts;
