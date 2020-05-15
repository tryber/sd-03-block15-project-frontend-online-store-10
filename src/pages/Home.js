import React from 'react';
import SideBar from '../components/Sidebar';
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
      selectCategory: '',
    };

    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.searchBar = this.searchBar.bind(this);
  }

  componentDidMount() {
    return api.getCategories().then((data) => this.setState({ categories: data }));
  }

  handleSearchInput(event) {
    this.setState({ query: event.target.value });
  }

  handleSearchSubmit() {
    const { query, selectCategory } = this.state;
    api
      .getProductsFromCategoryAndQuery(selectCategory, query)
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
          handleClick={this.handleSearchInput}
        />
        <button data-testid="query-button" type="button" onClick={this.handleSearchSubmit}>
          Pesquisar
        </button>
      </div>
    );
  }

  render() {
    const { categories, apiResults, selectCategory } = this.state;
    return (
      <div className="">
        <nav className="navbar bg-info" id="navbar">
          <NavBar />
          {this.searchBar()}
        </nav>
        <div className="container">
          <SideBar
            onChangeSideBar={(e) => {
              this.setState({ selectCategory: e.target.value });
              setTimeout(() => this.handleSearchSubmit(), 500);
            }}
            categorias={categories}
            selectCategory={selectCategory}
          />
          {apiResults.length === 0 ? <MessagemInicial /> : <GridProdutos products={apiResults} />}
          <CartLink />
        </div>
      </div>
    );
  }
}

export default Home;
