import React from 'react';
import BarraEsquerda from '../components/Sidebar';
import { CartLink } from '../components/CartLink';
import { GridProdutos } from '../components/GridProduto';
import MessagemInicial from '../components/InitialMessage';
import * as api from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
      apiResults: [],
      categories: [],
    };

    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.searchBar = this.searchBar.bind(this);
  }

  componentDidMount() {
    return api.getCategories().then((data) => this.setState({ categories: data }));
  }

  handleSearchInput(e) {
    this.setState({ query: e.target.value });
  }

  handleSearchSubmit() {
    const { query } = this.state;
    api
      .getProductsFromCategoryAndQuery('', query)
      .then((data) => this.setState({ apiResults: data.results }));
  }

  searchBar() {
    const { query } = this.state;
    return (
      <div>
        <input
          data-testid="query-input"
          placeholder="Insira o caminho da imagem"
          id="search-input"
          type="text"
          value={query}
          onChange={this.handleSearchInput}
        />
        <button data-testid="query-button" type="button" onClick={this.handleSearchSubmit}>
          Pesquisar
        </button>
      </div>
    );
  }

  render() {
    const { categories, apiResults } = this.state;
    return (
      <div>
        <div>
          <BarraEsquerda categorias={categories} />
        </div>
        {this.searchBar()}
        <div>
          <CartLink />
        </div>
        <div>
          {apiResults.length === 0 ? <MessagemInicial /> : <GridProdutos products={apiResults} />}
        </div>
      </div>
    );
  }
}

export default Home;
