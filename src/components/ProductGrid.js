import React from 'react';
import { CardDeck } from 'react-bootstrap';
import ProductCard from './ProductCard';

class ProductGrid extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <CardDeck>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </CardDeck>
    );
  }
}

export default ProductGrid;
