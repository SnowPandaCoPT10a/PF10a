import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilteredProducts } from '../../Redux/actions';

const FilteredProducts = () => {
    const [filters, setFilters] = useState({
        category: '',
        brand: '',
        minPrice: '',
        maxPrice: '',
        orderPrice: '',
        size: '',
        numberSize: '',
    });
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);

    const handleFilterChange = event => {
        setFilters({
            ...filters,
            [event.target.name]: event.target.value,
        });
    };

    const handleFilterSubmit = event => {
        event.preventDefault();
        const query = Object.entries(filters)
            .filter(([key, value]) => value !== '')
            .map(([key, value]) => `${key}=${value}`)
            .join('&');
        dispatch(FilteredProducts(query));
    };

    return (
        <div>
            <form onSubmit={handleFilterSubmit}>
                <div>
                    <label htmlFor="category">Category:</label>
                    <input type="text" name="category" value={filters.category} onChange={handleFilterChange} />
                </div>
                <div>
                    <label htmlFor="brand">Brand:</label>
                    <input type="text" name="brand" value={filters.brand} onChange={handleFilterChange} />
                </div>
                <div>
                    <label htmlFor="minPrice">Min price:</label>
                    <input type="number" name="minPrice" value={filters.minPrice} onChange={handleFilterChange} />
                </div>
                <div>
                    <label htmlFor="maxPrice">Max price:</label>
                    <input type="number" name="maxPrice" value={filters.maxPrice} onChange={handleFilterChange} />
                </div>
                <div>
                    <label htmlFor="orderPrice">Order by price:</label>
                    <select name="orderPrice" value={filters.orderPrice} onChange={handleFilterChange}>
                        <option value="">Select an option</option>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="size">Size:</label>
                    <input type="text" name="size" value={filters.size} onChange={handleFilterChange} />
                </div>
                <div>
                    <label htmlFor="numberSize">Number size:</label>
                    <input type="number" name="numberSize" value={filters.numberSize} onChange={handleFilterChange} />
                </div>
                <button type="submit">Filter</button>
            </form>

        </div>
    );
};

export default FilteredProducts;
