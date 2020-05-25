import React from 'react';
import { Link } from 'react-router-dom';

class DetailProduct extends React.Component {
  constructor(props){
   super(props);
 }
  render(){
    const product = this.props.location.state.product;
    console.log(this.props.location.state);
    return <div >
    <h1 data-testid="product-detail-name">{product.title}</h1>
    </div>
  }

}

export default DetailProduct;
