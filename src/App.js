import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomeScreen from './Pages/HomeScreen';
import ProductDetails from './Pages/ProductDetails';
import ProductCard from './components/ProductCard';
import CartScreen from './Pages/CartScreen';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/details/:id" component={ProductDetails} />
        <Route exact path="/shopcart" component={ProductCard} />
        <Route exact path="/details" component={ProductDetails} />
        <Route exact path="/shoppingcart" component={CartScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
