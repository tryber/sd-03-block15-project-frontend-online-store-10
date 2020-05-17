import React, { Component } from 'react';
import * as Api from '../services/api';
import Category from '../components/Category';
import NavBar from '../components/NavBar';
import ProductGrid from '../components/ProductGrid';
import InitialMessage from '../components/InitialMessage';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      products: [],
      selectedCategory: '',
    };
    this.handleButtonPush = this.handleButtonPush.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  componentDidMount() {
    Api.getCategories().then((categories) => this.setState({ categories }));
  }

  handleButtonPush(id) {
    this.setState({ selectedCategorie: id });
    Api.getProductsFromCategoryAndQuery(id, '')
    .then((data) => this.setState({ products: data.results }));
  }

  handleSearchSubmit(query) {
    Api.getProductsFromCategoryAndQuery('', query)
    .then((data) => this.setState({ products: data.results }));
  }

  render() {
    const { categories, products } = this.state;
    console.log(this.state.products.length);
    return (
      <div>
        <NavBar handleSearchSubmit={this.handleSearchSubmit} />
        <InitialMessage />
        <aside className="col-sm-10">
          {this.state.products === 0 ? <InitialMessage /> : <ProductGrid products={products} />}
          <Category categories={categories} handleButtonPush={this.handleButtonPush} />
        </aside>
      </div>
    );
  }
}

export default HomeScreen;
