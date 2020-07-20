import React, { useState } from 'react';
import './CardGame.css';
import image from '../../assets/fifa-18.png';

interface Products {
    id: number,
    name: string,
    price: number,
    score: number,
    image: string
  }

export default function CardGame(props: {product: Products}){

    const formatPrice = props.product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    return (
        <div className='containerCardGame'>
            <div className='image'>
                <img src={require(`../../assets/${props.product.image}`)} alt={props.product.name}/>
            </div>
            <div className='infoGame'>
                <span className='nameGame'>{props.product.name}</span>
                <span className='priceGame'>{formatPrice}</span>
            </div>
            <button>Adicionar ao carrinho</button>
        </div>
    );
}