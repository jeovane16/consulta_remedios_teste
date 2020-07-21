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

export default function Cart(props:{products:Products[], total: number, subTotal: number, freight: number}){

    function formatPrice(price: number){
        return price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    }

    function verifyProps(products: Products[]){
        if(products.length > 0){
            return(
                <div className='itemsCart'>
                        <ul>
                            {props.products.map(product => 
                                <li key={product.id}>
                                    <div className='imageProductCart'>
                                        <img src={require(`../../assets/${product.image}`)} alt={product.name}/>
                                    </div>
                                    
                                    <div className='info'>
                                        <span className='name'>{product.name}</span>
                                        <span className='price'>{formatPrice(product.price)}</span>
                                    </div>
                                    <button className='buttonRemove'>X</button>
                                </li>
                            )}
                        </ul>
                    <div className='saleInformation'>
                            <span className='contentInfo'> <span className='label'>Subtotal</span> <span className='infoSale'>{formatPrice(props.subTotal)}</span> </span>
                            <span className='contentInfo'> <span className='label'>Frete</span> <span className='infoSale'>{formatPrice(props.freight)}</span> </span>
                            <span className='contentInfo'> <span className='label'>Total</span> <span className='total'>{formatPrice(props.total)}</span> </span>
                    </div>
                    <button className='buttonFinish'>FINALIZAR COMPRA</button>
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
            <h2>Carrinho <span className='items'>{props.products.length ? `(${props.products.length} Items)`: ''}</span></h2>
            {verifyProps(props.products)}
        </div>
    );
}