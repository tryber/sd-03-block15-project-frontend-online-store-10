import React from 'react';
import CardItemHome from './CardItemHome';

class ItensListHome extends React.Component {
  render() {
    if (!this.props.itensList.length) {
      return ( <div data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </div>
      );
    }
    return (
      <div>
        {this.props.itensList.map((item) =>
          <CardItemHome
            key={item.id}
            item={item} />,
        )}
      </div>
    );
  }
}

export default ItensListHome;
