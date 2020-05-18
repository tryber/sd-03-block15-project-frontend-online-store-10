import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HomeScreen from './Pages/HomeScreen';
import ProductDetails from './Pages/ProductDetails';
import ProductCard from './components/ProductCard';
import CartScreen from './Pages/CartScreen';
import store from './store'


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/details/:id" component={ProductDetails} />
          <Route exact path="/shopcart" component={ProductCard} />
          <Route exact path="/details" component={ProductDetails} />
          <Route exact path="/shoppingcart" component={CartScreen} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
