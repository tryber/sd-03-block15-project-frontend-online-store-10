import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/itemdetail" component={ProductDetail} />
          <Route exact path="/itemdetail/:str" component={ProductDetail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
