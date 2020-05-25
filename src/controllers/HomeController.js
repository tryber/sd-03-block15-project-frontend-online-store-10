import React from 'react';
import * as api from '../services/api';
import CategoriesHome from '../views/CategoriesHome';
import ItensListHome from '../views/ItensListHome';
import SearchBarHome from '../views/SearchBarHome';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      cart: [],
      categories: [],
      itensList: [],
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.up = this.up.bind(this);
    this.onSearchtTextClick = this.onSearchtTextClick.bind(this);
  }
  componentDidMount() {
    api.getCategories().then((categories) => this.setState({ categories: categories }));
  }

  onSearchTextChange(e) {
    this.setState({ searchText: e.target.value });
  }

  onSearchtTextClick() {
    api.getProductsFromCategoryAndQuery(false, this.state.searchText).then((query) =>
      this.setState({ itensList: query.results }));
  }
  
  up(is) {
    api.getProductsFromCategoryAndQuery(is, false).then(query =>
      this.setState({ itensList: query.results }));
  }

  render() {
    const { match: { params: { Id } } } = this.props;
    console.log(Id);
    return (
      <div className="ItensListHome">
        <CategoriesHome categories={this.state.categories} update={this.up} />
        <SearchBarHome searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          onSearchtTextClick={this.onSearchtTextClick} />
        <ItensListHome searchText={this.state.searchText} itensList={this.state.itensList} />
      </div>
    );
  }
}

export default Home;
