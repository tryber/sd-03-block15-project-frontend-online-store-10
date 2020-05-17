import React, { Component } from 'react';
import * as Api from '../services/api';
import ShopCart from '../components/ShopCart';
import Category from '../components/Category';
import SearchItems from '../components/SearchItems';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      products: [],
      selectCategory: '',
    };
    this.handleClickCategory = this.handleClickCategory.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  componentDidMount() {
    Api.getCategories().then((categories) => this.setState({ categories }));
  }

  handleSearchInput(event) {
    this.setState({ selectCategory: event.target.value });
  }

  handleClickCategory(e) {
    Api.getProductsFromCategoryAndQuery(e)
      .then((selectCategory) => this.setState({ selectCategory }));
  }

  handleSearchSubmit() {
    const { selectCategory } = this.state;
    Api.getProductsFromCategoryAndQuery(selectCategory)
      .then((data) => this.setState({ products: data.results }));
  }

  render() {
    const { categories, selectCategory } = this.state;
    console.log('oi eu sou', categories);
    return (
      <div data-testid="home-initial-message">
        <ShopCart />
        <SearchItems selectCategory={selectCategory} />
        <aside className="col-sm-10">
          <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
          <Category categories={categories} />
        </aside>
        <footer>
          <p>Devs</p>
        </footer>
      </div>
    );
  }
}

export default HomeScreen;
