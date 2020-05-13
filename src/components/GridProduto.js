import React, { Component } from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from './CardProduts';

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
