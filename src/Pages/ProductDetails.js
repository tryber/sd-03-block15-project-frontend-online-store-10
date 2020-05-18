import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import CardDeck from 'react-bootstrap/Card';
import NavBar from '../components/NavBar';
import '../App.css';

class ProductDetails extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { product } = this.props.location.state;
    return (
      <div className="text-center">
        <NavBar />
        <CardDeck className="productDetails">
          <h2 className="">Detalhes do produto </h2>
          <div>
            <img
              className="productDetails"
              src={product.thumbnail}
              alt="foto produto"
            />
          </div>
          <h3 data-testid="product-detail-name">{product.title}</h3>
          <p>descrição</p>
          Bagatela de
          <p>{product.currency_id}: {product.price}</p>
          <div>
            <Button
              data-testid="product-detail-add-to-cart"
              type="button"
            >
              Adicionar ao carrinho
          </Button>
          </div>
          <Link to="/" style={{ textDecoration: 'none' }}>Página inicial</Link>
        </CardDeck>
      </div>
    );
  }
}

export default ProductDetails;
