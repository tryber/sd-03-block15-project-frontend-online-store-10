import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

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
          <button type="button" onClick={onAddToCart} data-testid="product-add-to-cart">
            Adicionar ao Carrinho
          </button>
          <Link to={{ pathname: `/itemdetail/${id}`, state: { product } }}>Detalhes</Link>
        </Card.Body>
      </Card>
    );
  }
}

export default CardProduts;
