import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import NavBar from '../components/NavBar';
import '../App.css';

class ProductDetails extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  addItem() {

  }

  render() {
    const { product } = this.props.location.state;
    return (
      <div>
        <NavBar />
        <h2 className="text-center">Detalhes do produto </h2>
        <div>
          <img
            className="productDetails"
            src={product.thumbnail}
            alt="foto produto"
          />
        </div>
        <Card className="text-center">
          <h3 data-testid="product-detail-name">{product.title}</h3>
          <p>descrição</p>
          Bagatela de
          <p>{product.currency_id}: {product.price}</p>
        </Card>
        <div>
          <button
            data-testid="product-detail-add-to-cart"
            type="button"
          >
            Adicionar ao carrinho
          </button>
        </div>
        <Link to="/">Página inicial</Link>
      </div>
    );
  }
}

export default ProductDetails;
