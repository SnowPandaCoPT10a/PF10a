import React from 'react'
import './Header.css'
import {FaFacebook, FaInstagram, FaLinkedin, FaGithubSquare} from 'react-icons/fa'

const Header = () => {
	return (
		<div>
		<h1>Header</h1>
			<div className="header-icons">

				<a className='linksH' ><FaFacebook aria-hidden="true" /></a>
				<a className='linksH' ><FaInstagram aria-hidden="true" /></a>
				<a className='linksH' ><FaLinkedin aria-hidden="true" /></a>
				<a className='linksH' ><FaGithubSquare aria-hidden="true" /></a>

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