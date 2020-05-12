import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class HomeScreen extends Component {
  render() {
    return (
      <div className="container">
        <header className="a">
          <h1 className="App">TRAINING SHOP</h1>
          <nav>
            <ul>
              Pesquisar
              <input
                data-testid="home-initial-message"
                placeholder="Digite algum termo de pesquisa ou escolha uma categoria."
              />
              <li>Carrinho</li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default HomeScreen;
