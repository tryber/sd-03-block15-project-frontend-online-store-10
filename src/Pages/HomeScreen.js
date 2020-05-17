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

  render() {
    const { categories } = this.state;
    return (
      <div>
        <NavBar />
        <div data-testid="home-initial-message">
          <aside className="col-sm-10">
            <Category categories={categories} handleButtonPush={this.handleButtonPush} />
            {this.state.products.length === 0 ? (
              <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
            ) : (
              <ProductGrid products={this.state.products} />
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
