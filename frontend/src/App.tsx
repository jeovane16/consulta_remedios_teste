import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import CardGame from './components/CardGame/CardGame';
import Cart from './components/Cart/Cart';

import getProducts from './services/api';

interface Products {
  id: number,
  name: string,
  price: number,
  score: number,
  image: string
}

function App() {

  const [products, setProducts] = useState<Products[]>([]);

  useEffect(()=>{
    getProducts().then(response =>{
      const newProducts = response;
      setProducts(newProducts);
    })
  });

  console.log(products)

  return (
    <div className='App'>
      <Header />
      <main className='containerMain'>
        {products.map(product =>
            <CardGame product={product}/>
        )}
      </main>
      <Cart />
    </div>
  );
}

export default App;
