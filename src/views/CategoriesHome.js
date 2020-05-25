import React from 'react';
import CardCategories from './CardCategories';

class CategoriesHome extends React.Component {
  render() {
    return (
      <div className="categories">
        {this.props.categories.map((item) =>
          <CardCategories
          key={item.id}
          id={item.id}
          up={this.props.update}
          categorie={item.name}
          />)}
      </div>
    );
  }
}

export default CategoriesHome;
