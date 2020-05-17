import React, { Component } from 'react';

class SearchItems extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChangeValue = this.handleChangeValue.bind(this);
  }
  handleChangeValue(e) {
    console.log(e.target);
    this.setState({ value: e.target.value });
  }

  render() {
    const { handleSearchSubmit } = this.props;

    return (
      <div>
        <input
          onChange={(e) => this.handleChangeValue(e)}
          value={this.state.value}
          type="text"
          className="form-control"
          data-testid="query-input"
          placeholder="Entre com sua busca"
        />
        <button data-testid="query-button" type="button" onClick={() => handleSearchSubmit(this.state.value)} className="btn">
          Save
        </button>
      </div>
    );
  }
}

export default SearchItems;
