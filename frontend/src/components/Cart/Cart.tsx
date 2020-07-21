import React from 'react';
import './Cart.css';
import imgCart from '../../assets/cart-icon.svg';

interface Products {
    id: number,
    name: string,
    price: number,
    score: number,
    image: string
}

export default function Cart(props:{products:Products[]}){

    function formatPrice(price: number){
        return price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    }

    function verifyProps(products: Products[]){
        if(products.length > 0){
            return(
                <div className='itemsCart'>
                    <div className='listProducts'>
                        <ul>
                            {props.products.map(product => 
                                <li key={product.id}>
                                    <img src={require(`../../assets/${product.image}`)} alt={product.name}/>
                                    <div>
                                        <span>{product.name}</span>
                                        <span>{formatPrice(product.price)}</span>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className='saleInformation'>
                            <span> <span>subtotal</span> <span>{}</span> </span>
                            <span> <span>frete</span> <span>{}</span> </span>
                            <span> <span>total</span> <span>{}</span> </span>
                    </div>
                    <button>FINALIZAR COMPRA</button>
                </div>
            );
        }else {
            return(
                <div className='empityCart'>
                    <img src={imgCart} alt="Imagem do carrinho"/>
                    <span>Até o momento<br></br>o seu carrinho está vazio</span>
                </div> 
            );
        }
    }

    return(
        <div className='containerCart'>
            <h2>Carrinho</h2>
            {verifyProps(props.products)}
        </div>
    );
}