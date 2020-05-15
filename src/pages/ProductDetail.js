import React from 'react';
import { Media } from 'react-bootstrap';
import CartLink from '../components/CartLink';
import Rating from '../components/Rating';

class ProductDetail extends React.Component {
  render() {
    const { product } = this.props.location.state;
    return (
      <div>
        <CartLink />
        <h4 data-testid="product-detail-name">{product.title}</h4>
        <ul className="list-unstyled">
          <Media as="li">
            <img
              width={128}
              height={128}
              className="mr-3"
              src={product.thumbnail}
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5>Marca: {product.attributes[0].value_name}</h5>
              <p>Modelo:{product.attributes[2].value_name}</p>
              <p>Aceita Mercado Pago: {product.accepts_mercadopago ? 'Sim' : 'Não'}</p>
              <p>
                Preço: {product.currency_id}:{product.price}
              </p>
            </Media.Body>
          </Media>
          <Rating />
        </ul>
      </div>
    );
  }
}

export default ProductDetail;
