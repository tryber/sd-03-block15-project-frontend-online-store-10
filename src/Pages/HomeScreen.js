import React, { Component } from 'react';
import * as Api from '../services/api';
import Category from '../components/Category';
import NavBar from '../components/NavBar';
import ProductGrid from '../components/ProductGrid';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      products: [],
      selectedCategory: '',
      query: '',
    };
    this.handleButtonPush = this.handleButtonPush.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  componentDidMount() {
    Api.getCategories().then((categories) => this.setState({ categories }));
  }

  handleButtonPush(id) {
    this.setState({ selectedCategorie: id });
    console.log(id);
    console.log(this.state);
    Api.getProductsFromCategoryAndQuery(id, '')
      .then((data) => this.setState({ products: data.results }));
  }

  handleSearchInput(event) {
    this.setState({ query: event });
    console.log(event);
    console.log(this.state.query);
  }

  handleSearchSubmit() {
    const { query } = this.state;
    console.log('estou sendo clicakdo');
    Api.getProductsFromCategoryAndQuery('', query)
      .then((data) => this.setState({ products: data.result }));
  }

  render() {
    const { categories, query, products } = this.state;
    return (
      <div>
        <NavBar
          value={query}
          handleSearchInput={this.handleSearchInput}
          handleSearchSubmit={this.handleSearchSubmit}
        />
        <div data-testid="home-initial-message">
          <aside className="col-sm-10">
            <Category categories={categories} handleButtonPush={this.handleButtonPush} />
            {products.length === 0 ? (
              <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
            ) : (
                <ProductGrid products={products} />
              )}
          </aside>
          <footer>
            <p>Devs</p>
          </footer>
        </div>
      </div>
    );
  }
}

export default HomeScreen;
