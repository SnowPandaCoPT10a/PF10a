import React from 'react'
import './Header.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithubSquare, FaUserAlt, FaShoppingCart } from 'react-icons/fa'
import SearchBar from '../SearchBar/SearchBar'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<div className='header'>
			<Link to={'/'}><h1>Header</h1></Link>
			<SearchBar />
			<Link to={'/Shop'}>Tienda</Link>
			<div className="header-icons">

				<a className='linksH' ><FaFacebook aria-hidden="true" /></a>
				<a className='linksH' ><FaInstagram aria-hidden="true" /></a>
				<a className='linksH' ><FaLinkedin aria-hidden="true" /></a>
				<a className='linksH' ><FaGithubSquare aria-hidden="true" /></a>

			</div>
			<div className='carrito'>
				<a className='linksH' ><FaUserAlt aria-hidden="true" /></a>
				<a className='linksH' ><FaShoppingCart aria-hidden="true" /></a>
			</div>

		</div>
	)
}



export default Header

// (se cambian con condicionales)

// landing/home(sin logear): logo -registro( login)-tienda - iconos redes sociales - corazoncito de favoritos

// landing/home(logeado): logo- mi perfil- registro(logout)- iconos redes sociales - corazon fav.- tienda

// tienda(sin logear): logo- registro- buscador(serchbar)

// tienda(logeado): logo, registro(logout)-carrito-favoritos- busqueda(serchbar)