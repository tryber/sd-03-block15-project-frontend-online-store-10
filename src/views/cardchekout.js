import React from 'react';

class CardCategories extends React.Component {
  render() {
    return (
      <div>
        {this.props.item.title}
      </div>
    );
  }
}

export default CardCategories;