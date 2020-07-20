import React from 'react';
import './Cart.css';
import imgCart from '../../assets/cart-icon.svg';

export default function Cart(){
    return(
        <div className='containerCart'>
            <h2>Carrinho</h2>
            <div className='empityCart'>
                <img src={imgCart} alt="Imagem do carrinho"/>
                <span>Até o momento<br></br>o seu carrinho está vazio</span>
            </div>
        </div>
    );
}