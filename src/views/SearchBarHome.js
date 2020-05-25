import React from 'react';
import { Link } from 'react-router-dom';

class SearchBarHome extends React.Component {
  render() {
    const {
      searchText, onSearchTextChange, onSearchtTextClick, 
    } = this.props;
    return (
      <form>
        <label htmlFor="IncluiOTexto">
        Inclui o texto:
          <input type="text" data-testid="query-input" value={searchText} onChange={onSearchTextChange} />
          <input type="button" data-testid="query-button" value="ok" onClick={onSearchtTextClick} />
          <Link data-testid="shopping-cart-button" to="/Cart">carrinho</Link>
        </label>
      </form>
    );
  }
}

export default SearchBarHome;
