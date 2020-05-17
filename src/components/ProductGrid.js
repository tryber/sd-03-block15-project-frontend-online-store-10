import React from 'react';
import ProductCard from './ProductCard';
import { CardDeck } from 'react-bootstrap';

class ProductGrid extends React.Component {
  render() {
    console.log(this.props);
    const { products } = this.props;
    return (
      <CardDeck>
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </CardDeck>
    );
  }
}

export default ProductGrid;
