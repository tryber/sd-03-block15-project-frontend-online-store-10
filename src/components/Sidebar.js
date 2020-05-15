import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    const { categorias, selectCategory, onChangeSideBar } = this.props;

    return categorias.map(({ id, name }) => (
      <div key={id}>
        <input
          type="radio"
          value={id}
          name="category"
          id="id"
          data-testid="category"
          checked={selectCategory === id}
          onChange={onChangeSideBar}
        />
        <label htmlFor={id}>{name}</label>
      </div>
    ));
  }
}

export default Sidebar;
