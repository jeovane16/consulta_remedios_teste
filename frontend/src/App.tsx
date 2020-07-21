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
  const [subTotal, setSubTotal] = useState(0.0);
  const [total, setTotal] = useState(0.0);
  const [freight, setFreight] = useState(0.0);

  useEffect(()=>{
    getProducts().then(response =>{
      const newProducts = response;
      setProducts(newProducts);
    })
  });

  useEffect(()=>{
    if(subTotal > 250){
      setFreight(0);
    }
  }, [subTotal]);

  useEffect(()=>{
    if(subTotal > 250){
      setTotal(subTotal);
    }else{
      setTotal(subTotal+freight);
    }
  }, [subTotal]);

  function handleSetProducts(product: Products){
    setSelectedProducts([...selectedProducts, product]);
    setSubTotal(subTotal+product.price);
    setFreight(freight+10);
  }


  return (
    <div className='App'>
      <Header />
      <main className='containerMain'>
        {products.map(product =>
            <CardGame 
              key={product.id} onClick={()=>handleSetProducts(product)} 
              product={product}
            />
        )}
      </main>
      <Cart 
        products={selectedProducts} 
        total={total} 
        subTotal={subTotal} 
        freight={freight}
      />
    </div>
  );
}

export default App;
