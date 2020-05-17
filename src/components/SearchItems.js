import React, { Component } from 'react';

class SearchItems extends Component {
  render() {
    const { selectCategory, handleSearchInput } = this.props;
    console.log(this);
    return (
      <div className="text-center">
        <input
          className=""
          data-testid="query-input"
          placeholder="Insira sua pesquisa"
          type="text"
          onChange={handleSearchInput}
          value={selectCategory}
        />
        <button
          onClick={this.handleSearchSubmit}
          data-testid="query-button"
          type="button"
        >
          Pesquisar
        </button>
      </div>
    );
  }
}

export default SearchItems;
