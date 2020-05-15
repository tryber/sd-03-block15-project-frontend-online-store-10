import React from 'react';

const searchBar = () => {
  console.log(this.props);
  const { query, handleSearchInput, handleSearchSubmit } = this.props;
  return (
    <div>
      <input
        data-testid="query-input"
        placeholder="Insira sua pesquisa"
        id="search-input"
        type="text"
        value={query}
        onChange={handleSearchInput}
      />
      <button data-testid="query-button" type="button" onClick={handleSearchSubmit}>
        Pesquisar
      </button>
    </div>
  );
};

export default searchBar;
