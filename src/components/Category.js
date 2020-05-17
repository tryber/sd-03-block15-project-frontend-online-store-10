import React, { Component } from 'react';

class Category extends Component {
  render() {
    const { categories } = this.props;

    return categories.map(({ id, name }) => (
      <div
        className=""
        data-testid="category"
        key={id}
      >
        <button
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
