import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

export class CardProduts extends Component {
  render() {
    const { product } = this.props;
    const { id, title, thumbnail, price, onAddToCart } = product;
    return (
      <Card className="text-center" border="dark" style={{ width: '18rem' }} data-testid="product">
        <Card.Img variant="top" src={thumbnail} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <h5 className="mb-2">{id}</h5>
          <h5>{price}</h5>
          <Link to="/cart">
            <button type="button" onClick={onAddToCart} data-testid="product-add-to-cart">
              Adicionar ao carrinho
            </button>
          </Link>
        </Card.Body>
      </Card>
    );
  }
}

export default CardProduts;
