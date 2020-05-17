import React, { Component } from 'react';

class Category extends Component {
  render() {
    const { categories, handleButtonPush } = this.props;
    return categories.map(({ id, name }) => (
      <div className="" data-testid="category" key={id}>
        <button
          onClick={() => handleButtonPush(id)}
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
