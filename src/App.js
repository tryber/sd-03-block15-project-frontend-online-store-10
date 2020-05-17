import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomeScreen from './Pages/HomeScreen';

function App() {
  return (
    <BrowserRouter>
      <HomeScreen />
    </BrowserRouter>
  );
}

export default App;
