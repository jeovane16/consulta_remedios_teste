import React, { useState } from 'react';
import './CardGame.css';
import image from '../../assets/fifa-18.png';

export default function CardGame(){

    return (
        <div className='containerCardGame'>
            <div className='image'>
                <img src={image} alt="teste"/>
            </div>
            <div className='infoGame'>
                <span className='nameGame'>FIFA 18</span>
                <span className='priceGame'>R$ 195,39</span>
            </div>
            <button>Adicionar ao carrinho</button>
        </div>
    );
}