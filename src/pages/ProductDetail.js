import React from 'react';
import { Media } from 'react-bootstrap';

class ProductDetail extends React.Component {
  render() {
    console.log(this.props.location.state);
    const { product } = this.props.location.state;
    return (
      <div>
        <h4>{product.title}</h4>
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
              <h5>{product.attributes[0].value_name}</h5>
              <p>{product.attributes[2].value_name}</p>
              <p>Aceita Mercado Pago: {product.accepts_mercadopago ? 'Sim' : 'Não'}</p>
            </Media.Body>
          </Media>
        </ul>
      </div>
    );
  }
}

export default ProductDetail;
