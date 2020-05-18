import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div>
        <Card className="mt-5" data-testid="product" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={product.thumbnail} />
          <Card.Body>
            <Card.Title>{`${product.title.slice(0, 15)}`}</Card.Title>
            <Card.Text>
              {product.currency_id} {product.price}
            </Card.Text>
            <Button
              variant="primary"
            >
              Adicionar
            </Button>
            <Link
              to={{ pathname: `/details/${product.id}`, state: { product } }}
              data-testid="product-detail-link"
            >
              Ver detalhes
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ProductCard;
