import React, { useState } from 'react';
import './Header.css';

export default function Header(props:{order:Function}){

    const [value, setValue] = useState('mostPopular');

    function handleChange(event: React.FormEvent<HTMLSelectElement>){
        event.preventDefault();
        const newValue = event.currentTarget.value;
        setValue(newValue);
        props.order(value);
    }

    return (
        <header className='containerHeader'>
            <h1>Games</h1>
            <form action="">
                <select value={value} onChange={(e)=>{handleChange(e)}} name="order" id="order">
                    <option value='mostPopular'>Mais Populares</option>
                    <option value='lowestPrice'>Menor Preço</option>
                    <option value='biggestPrice'>Maior Preço</option>
                </select>
            </form>
        </header>
    );
}