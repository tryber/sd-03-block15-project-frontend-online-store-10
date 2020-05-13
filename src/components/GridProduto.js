import React, { Component } from 'react';
import Card from './CardProduts';
import CardColumns from 'react-bootstrap/CardColumns';

export class GridProdutos extends Component {
  render() {
    const { products } = this.props;
    return (
      <CardColumns>
        <div>
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </CardColumns>
    );
  }
}

export default GridProdutos;
