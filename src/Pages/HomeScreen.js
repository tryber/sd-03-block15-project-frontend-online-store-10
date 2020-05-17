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
    Api.getProductsFromCategoryAndQuery(id, '').then((data) =>
      this.setState({ products: data.results })
    );
  }

  handleSearchSubmit(query) {
    console.log('estou sendo clicakdo');
    Api.getProductsFromCategoryAndQuery('', query).then((data) => this.setState({products :data.results}));
    console.log(this.state.products)
  }

  render() {
    const { categories, products } = this.state;
    return (
      <div>
        <NavBar handleSearchSubmit={this.handleSearchSubmit} />
        <div data-testid="home-initial-message">
          <aside className="col-sm-10">
            <Category categories={categories} handleButtonPush={this.handleButtonPush} />
            <ProductGrid products={products} />
          </aside>
          <footer>
            <p>Devss</p>
          </footer>
        </div>
      </div>
    );
  }
}

export default HomeScreen;
