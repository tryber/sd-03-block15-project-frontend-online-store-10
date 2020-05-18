import React from 'react';

class InitialMessage extends React.Component {
  render() {
    return (
      <div className="text-center">
        <h1 data-testid="home-initial-message" className="text-monospace bg-light colorTitle">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
      </div>
    );
  }
}

export default InitialMessage;
