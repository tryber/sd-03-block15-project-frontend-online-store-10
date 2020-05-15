import React from 'react';
import { Card } from 'react-bootstrap';

class CartUniqueItem extends React.Component {
  render() {
    console.log(this.props.item.product);
    const { price, id, title, thumbnail } = this.props.item.product;
    return (
      <div>
        <Card
          className="text-center"
          border="dark"
          style={{ width: '18rem' }}
          data-testid="product"
        >
          <Card.Img variant="top" src={thumbnail} alt={title} />
          <Card.Body>
            <Card.Title data-testid="shopping-cart-product-name">{title}</Card.Title>
            <h6 className="mb-2">{id}</h6>
            <h6>{price}</h6>
            <p data-testid="shopping-cart-product-quantity">1</p>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default CartUniqueItem;
