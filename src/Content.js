import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './controllers/HomeController';
import Cart from './views/Cart';
import DetailProduct from './controllers/detailProductControler';
import checkout from './views/checkout';

function Content() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Cart" component={Cart} />
      <Route path="/Detail" component={DetailProduct} />
      <Route path="/Checkout" component={checkout} />
      <Route path="/:Id" component={Home} />
    </Switch>
  );
}

export default Content;
