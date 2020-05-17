import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { product, id } = this.props;
    return (
      <div>
        {/* <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p> */}
        <Card className="mt-5" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={product.thumbnail} />
          <Card.Body>
            <Card.Title>{`${product.title.slice(0, 15)}`}</Card.Title>
            <Card.Text>
              {product.currency_id} {product.price}
            </Card.Text>
            <Button
              data-testid="product-add-to-cart"
              variant="primary">Adicionar ao carrinho</Button>
            <Link
              to={{ pathname: `/details/${id}`, state: { product } }}
              data-testid="product-detail-link"
            >
              Ver Detalhes
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ProductCard;
