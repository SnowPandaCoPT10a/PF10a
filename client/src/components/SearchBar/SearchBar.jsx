import React from 'react'
import './SearchBar.css'
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {

	return (
		<div id='search' className="search-box">
			
			<input typre='text' name='search' className="input-search" placeholder="Search Products" />
			<button className="btn-search" ><FaSearch  className="fas fa-search"/></button>
		</div>
	)
}


export default SearchBar