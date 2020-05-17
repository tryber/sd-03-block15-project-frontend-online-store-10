import React, { Component } from 'react';
import * as Api from '../services/api';
class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategorie: '',
      products: [],
    };
    this.handleButtonPush = this.handleButtonPush.bind(this);
  }

  handleButtonPush(name) {
    console.log(name);
    this.setState({ selectedCategorie: this.id });
  }
  render() {
    const { categories } = this.props;

    return categories.map(({ id, name }) => (
      <div className="" data-testid="category" key={id}>
        <button
          onClick={() => this.handleButtonPush(id)}
          className="btn btn-outline-primary mesmo-tamanho"
          type="button"
        >
          {name}
        </button>
      </div>
    ));
  }
}

export default Category;
