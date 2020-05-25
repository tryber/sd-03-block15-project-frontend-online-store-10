import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import StoreFc from './StoreFc';
import './App.css';

function App() {
  return (
    <Router>
      <StoreFc />
    </Router>
  );
}

export default App;