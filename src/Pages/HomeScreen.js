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
      selectCategory: '',
    };
    this.handleClickCategory = this.handleClickCategory.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  componentDidMount() {
    Api.getCategories().then((categories) => this.setState({ categories }));
  }

  handleClickCategory(e) {
    Api.getProductsFromCategoryAndQuery(e).then((selectCategory) =>
      this.setState({ selectCategory })
    );
  }

  handleSearchSubmit(e) {
    const { selectCategory } = this.state;
    console.log('clickado');
    Api.getProductsFromCategoryAndQuery(e).then((data) =>
      this.setState({ products: data.results })
    );
  }

  render() {
    const { categories, selectCategory } = this.state;
    return (
      <div>
        <NavBar handleSearchSubmit={this.handleSearchSubmit} />
        <div data-testid="home-initial-message">
          <aside className="col-sm-10">
            {this.state.products.length === 0 ? (
              <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
            ) : (
              <ProductGrid />
            )}
            <Category categories={categories} />
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
