import React from 'react';
import { Link } from 'react-router-dom';
import * as cart from '../services/CartStorage';
import Cardcheckout from '../views/cardchekout';

class checkout extends React.Component {
  render() {
    const product = this.props.location.state.products;
    return (
      <div>
        <div className="categories">
        {product.map((item) =>
          <Cardcheckout
            key={item.id}
            item={item}
          />)}
      </div>
        <input
          data-testid="checkout-fullname"
        />
        <input
          data-testid="checkout-email"
        />
        <input
          data-testid="checkout-cpf"
        />
        <input
          data-testid="checkout-phone"
        />
        <input
          data-testid="checkout-cep"
        />
        <input
          data-testid="checkout-address"
        />
      </div>
    );
  }
}

export default checkout;
