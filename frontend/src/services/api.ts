import axios from 'axios';

interface Products {
    id: number,
    name: string,
    price: number,
    score: number,
    image: string
}

/**
 * Função que retorna um array de produtos
 */

const URL = ' http://localhost:3001/products';
export default async function getProducts(){
    const response = await axios.get<Products[]>(URL);
    return response.data;
}