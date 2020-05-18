import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as cartActions from '../actions/cart';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.addNewItem = this.addNewItem.bind(this);
  }

  addNewItem(product) {
    this.props.addToCart(product);
  }

  render() {
    const { product } = this.props;
    return (
      <div>
        <Card className="mt-5" data-testid="product" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={product.thumbnail} />
          <Card.Body>
            <Card.Title>{`${product.title.slice(0, 15)}`}</Card.Title>
            <Card.Text>{product.price}</Card.Text>
            <Button
              variant="primary"
              data-testid="product-add-to-cart"
              onClick={() => this.addNewItem(product)}
            >
              Adicionar
            </Button>
            <Link
              to={{ pathname: `/details/${product.id}`, state: { product } }}
              data-testid="product-detail-link"
            >
              <Button>
                Ver detalhes
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ cart: state.cart });
const mapDispatchToProps = (dispatch) => bindActionCreators(cartActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);

// className="spaceButton"
// style={{ backgroundColor: 'red', border: 'red' }}
