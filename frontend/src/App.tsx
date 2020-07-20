import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import CardGame from './components/CardGame/CardGame';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div>
      <Header/>
      <CardGame/>
      <Cart />
    </div>
  );
}

export default App;
