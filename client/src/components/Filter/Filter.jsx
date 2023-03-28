import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FilteredProducts } from '../../Redux/actions/index';

function FilterForm({ pagination }) {
    const [category, setCategory] = useState('');
    const [brand, setBrand] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [orderPrice, setOrderPrice] = useState('');
    const [size, setSize] = useState('');
    const [numberSize, setNumberSize] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        // Crea un objeto con los valores seleccionados para cada filtro
        const query = {
            category,
            brand,
            minPrice,
            maxPrice,
            orderPrice,
            size,
            numberSize,
        };

        // Envía la acción de Redux para actualizar la lista de productos filtrados
        dispatch(FilteredProducts(query));
    };

    return (
        <form onSubmit={handleSubmit}>

            {/*<label htmlFor="brand">Brand:</label>
             <select id="brand" value={brand} onChange={(e) => setBrand(e.target.value)}>
                <option value="">All</option>
                <option value="SnowPandaCo">SnowPandaCo</option>
                <option value="Burton">Burton</option>
                <option value="Rome">Rome</option>
                <option value="Nitro">Nitro</option>
                <option value="k2">K2</option>
                <option value="Rossignol">Rossignol</option>
                <option value="Arbor">Arbor</option>
                <option value="Capita">Capita</option>
                <option value="Gnu">Gnu</option>
                <option value="Jones">Jones</option>
            </select> */}

            <label htmlFor="minPrice">Precio mínimo:</label>
            <input type="number" id="minPrice" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />

            <label htmlFor="maxPrice">Precio máximo:</label>
            <input type="number" id="maxPrice" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />

            <label htmlFor="orderPrice">Ordenar por precio:</label>
            <select id="orderPrice" value={orderPrice} onChange={(e) => setOrderPrice(e.target.value)}>
                <option value="">Ninguno</option>
                <option value="asc">Ascendente</option>
                <option value="desc">Descendente</option>
            </select>

            <label htmlFor="size">Size</label>
            <select id="size" value={size} onChange={(e) => setSize(e.target.value)}>
                <option value="">Todos</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
            </select>
            <button className='buton1' onClick={() => pagination(1)}>Filtrar</button>
        </form>)
}

export default FilterForm
