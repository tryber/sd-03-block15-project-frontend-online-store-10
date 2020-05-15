import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Payment from './components/Payment';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/concluirpedido" comṕonent={Payment} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
