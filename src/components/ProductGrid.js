import React from 'react';
import ProductCard from './ProductCard';
import { CardDeck } from 'react-bootstrap';

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
