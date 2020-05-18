import React from 'react';
import { Card } from 'react-bootstrap';

class CartItemCard extends React.Component {
  render() {
    console.log(this.props)
    const { product } = this.props.product;
    return (
      <div>
        <Card className="mt-5" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={product.thumbnail} />
          <Card.Body>
            <Card.Title data-testid="shopping-cart-product-name">{`${product.title}`} </Card.Title>
            <Card.Text>
              {product.currency_id} {product.price} {product.id}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default CartItemCard;
