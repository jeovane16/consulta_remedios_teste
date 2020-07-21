import React from 'react';
import './CardGame.css';

interface Products {
    id: number,
    name: string,
    price: number,
    score: number,
    image: string
}

export default function CardGame(props: {product: Products, onClick: Function}){

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
            <button onClick={()=>props.onClick()}>Adicionar ao carrinho</button>
        </div>
    );
}