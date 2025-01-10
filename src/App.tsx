import React from 'react';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import NavBar from './NavBar';
import ProductDashboard from './features/product/components/ProductDashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ProductDashboard />
    </div>
  );
}

export default App;
