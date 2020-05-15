import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Sidebar extends Component {
  render() {
    const { categorias, handleCategorySelect } = this.props;
    return (
      <div>
        {categorias.map((categoria) => (
          <Button
            data-testid="category"
            key={categoria.id}
            type="button"
            variant="dark"
            onClick={() => handleCategorySelect(categoria.id)}
          >
            {categoria.name}
          </Button>
        ))}
      </div>
    );
  }
}
export default Sidebar;
