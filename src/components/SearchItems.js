import React, { Component } from 'react';

class SearchItems extends Component {
  constructor(props) {
    super(props);
    this.state = { query: '' };
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  handleSearchInput(event) {
    this.setState({ query: event.tatget.value });
    console.log(this.state.query);
  }

  render() {
    // const { handleSearchInput } = this.props;
    console.log(this.props);
    return (
      <div>
        <input
          onChange={() => this.handleSearchInput}
          value={this.state.query}
          type="text"
          className="form-control"
          placeholder="Entre com sua busca"
        />
      </div>
    );
  }
}

export default SearchItems;
