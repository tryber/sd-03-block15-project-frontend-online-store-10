import React, { Component } from 'react';
import { InputGroup, Button, FormControl } from 'react-bootstrap';
import * as Api from '../services/api';

class SearchItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      selectedCategory: '',
    };
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }
  handleSearchInput(event) {
    this.setState({ searchValue: event.target.value });
  }

  handleSearchSubmit() {
    const { searchValue, selectedCategory } = this.state;
    if (!selectedCategory) {
      Api.getProductsFromCategoryAndQuery(searchValue).then((data) =>
        this.setState({ products: data.result })
      );
    }
  }

  render() {
    return (
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Entre com sua busca"
          aria-label="Entre com sua busca"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="light">Buscar</Button>
        </InputGroup.Append>
      </InputGroup>
    );
  }
}

export default SearchItems;
