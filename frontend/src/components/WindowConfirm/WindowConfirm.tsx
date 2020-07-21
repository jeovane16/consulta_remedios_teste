import React from 'react';
import './WindowConfirm.css';

export default function WindowConfirm(props:{onClick:Function}){
    return (
        <div className='popup'>
            <div className='containerWindow'>
                <span>Obrigado por comprar conosco!!!</span>
                <button onClick={()=>{props.onClick()}}>CONTINUAR</button>
            </div>
        </div>
    );
}