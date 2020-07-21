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
  const [selectedProducts, setSelectedProducts] = useState<Products[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(()=>{
    getProducts().then(response =>{
      const newProducts = response;
      setProducts(newProducts);
    })
  });

  function handleSetProducts(product: Products){
    setSelectedProducts([...selectedProducts, product]);
    setTotal(total+product.price);
  }

  return (
    <div className='App'>
      <Header />
      <main className='containerMain'>
        {products.map(product =>
            <CardGame key={product.id} onClick={()=>handleSetProducts(product)} product={product}/>
        )}
      </main>
      <Cart products={selectedProducts}/>
    </div>
  );
}

export default App;
