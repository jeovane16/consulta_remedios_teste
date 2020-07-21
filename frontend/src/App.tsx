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
    let aux = 0;
    selectedProducts.map(product => aux+=product.price);
    setSubTotal(aux);
    if(subTotal>250){
      setFreight(0);
      setTotal(subTotal);
    }else{
      setFreight(10*selectedProducts.length);
      setTotal(subTotal+freight);
    }
  });
  
  function handleSetProducts(product: Products){
    setSelectedProducts([...selectedProducts, product]);
  }

  function handleRemoveItem(product: Products){
    const auxProducts = selectedProducts;
    for( let i = 0; i < auxProducts.length; i++){ 
      if ( auxProducts[i].id === product.id) {
        auxProducts.splice(i,1);
        setSelectedProducts(auxProducts);
          break;
      }
    }
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
        callbackParent={(product: Products) => handleRemoveItem(product)}
      />
    </div>
  );
}

export default App;
