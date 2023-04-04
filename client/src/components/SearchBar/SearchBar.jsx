import React from 'react'
import './SearchBar.css'
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsName, getAllProducts } from '../../Redux/actions/index.js'
import { useLocation, Link, useNavigate } from 'react-router-dom'


const SearchBar = ({ categories }) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productNames = useSelector((state) => state.products);
  // const category = productNames[0]
  // const location = useLocation();

  function handleInputChange(e) {
    setName(e.target.value);
    navigate('Products/')

  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getAllProducts())
    dispatch(getAllProductsName(name));
    setName("");  

  }

  return (

    <div id='search' className="search-box">
      <input list='productNames' type='text' value={name} name='search' className="input-search" placeholder="Search Products" onChange={(e) => handleInputChange(e)} />
      {/* <datalist id='productNames'>
        {productNames.map(el => (
          <option key={el.productsID} value={el.name } />
        ))}
      </datalist> */}
      <button className="btn-search" onClick={(e) => handleSubmit(e)}><FaSearch className="fas fa-search" /></button>
    </div>
  );
};

export default SearchBar
