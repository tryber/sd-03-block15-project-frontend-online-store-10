import React from 'react';
import BarraEsquerda from '../components/Sidebar';
import { CartLink } from '../components/CartLink';
import { GridProdutos } from '../components/GridProduto';
import MessagemInicial from '../components/InitialMessage';
import NavBar from '../components/NavBar';
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
    this.handleCategorySelect = this.handleCategorySelect.bind(this);
  }

  componentDidMount() {
    return api.getCategories().then((data) => this.setState({ categories: data }));
  }

  handleSearchInput(event) {
    this.setState({ query: event.target.value });
  }

  handleSearchSubmit() {
    const { query } = this.state;
    api
      .getProductsFromCategoryAndQuery('', query)
      .then((data) => this.setState({ apiResults: data.results }));
  }

  handleCategorySelect(event) {
    api
      .getProductsFromCategoryAndQuery(event)
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
        <nav className="container container-fluid navbar navbar-default bg-dark">
          <NavBar />
          {this.searchBar()}
          <CartLink />
        </nav>
        <div className="container">
          {apiResults.length === 0 ? <MessagemInicial /> : <GridProdutos products={apiResults} />}
          <BarraEsquerda categorias={categories} handleCategorySelect={this.handleCategorySelect} />
        </div>
      </div>
    );
  }
}

export default Home;
