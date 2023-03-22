import React from 'react'
import './SearchBar.css'

const SearchBar = props => {

	return (
		<div id='search'>
			<label>Search</label>
			<input typre='text' name='search' onChange={''} />
		</div>
	)
}


export default SearchBar