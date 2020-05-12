import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomeScreen} />
      </Switch>
    </Router>
  );
}

export default App;
