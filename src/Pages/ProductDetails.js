import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import NavBar from '../components/NavBar';

class ProductDetails extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <NavBar />
        <h2>Detalhes do produto </h2>
        <Card className="">
          <h3 data-testid="product-detail-name">nome do produto</h3>
          {/* <img /> */}
          <p>descrição</p>
          <p>preço</p>
        </Card>
        <div>
          <button type="button">Adicionar ao carrinho</button>
        </div>
        <Link to="/">Página inicial</Link>
      </div>
    );
  }
}

export default ProductDetails;
