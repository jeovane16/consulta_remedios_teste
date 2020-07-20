import React from 'react';
import './Header.css';

export default function Header(){
    return (
        <header className='containerHeader'>
            <h1>Games</h1>
            <form action="">
                <select name="order" id="order">
                    <option value='mostPopular'>Mais Populares</option>
                    <option value='lowestPrice'>Menor Preço</option>
                    <option value='biggestPrice'>Maior Preço</option>
                </select>
            </form>
        </header>
    );
}