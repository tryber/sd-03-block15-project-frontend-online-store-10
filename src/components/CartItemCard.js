import React from 'react';
import { Card, Button } from 'react-bootstrap';

class CartItemCard extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div>
        <Card className="mt-5" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={product.thumbnail} />
          <Card.Body>
            <Card.Title>{`${product.title.slice(0, 15)}`}</Card.Title>
            <Card.Text>
              {product.currency_id} {product.price}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default CartItemCard;
