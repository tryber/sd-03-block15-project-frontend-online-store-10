import React from 'react';
import { Link } from 'react-router-dom';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Detalhes do produto </h1>
        <Link to="details" ></Link>
      </div>
    );
  }
}

export default ProductDetails;
