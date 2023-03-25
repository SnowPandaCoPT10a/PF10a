import React from 'react'
import './Header.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithubSquare, FaUserAlt, FaShoppingCart } from 'react-icons/fa'
import SearchBar from '../SearchBar/SearchBar'
import { Link , useLocation } from 'react-router-dom'

const Header = ({navigateToCategory, categories}) => {
	const location = useLocation();

 const isProductCategoryPage = categories.some(
    (category) => location.pathname === category.path
  );

  return (
    <div className='cntHeader'>
      <Link to={'/'}>
        <button className='btnHome'>Home</button>
      </Link>

      <Link to={'/Shop'}>
        <button className='btnHome'>Shop</button>
      </Link>

      {isProductCategoryPage && <SearchBar categories={categories} />}

      <button className='btnUser'>
        <FaUserAlt />
      </button>
      <button className='btnCarrt'>
        <FaShoppingCart />
      </button>
    </div>
  );
}


export default Header

// (se cambian con condicionales)

// landing/home(sin logear): logo -registro( login)-tienda - iconos redes sociales - corazoncito de favoritos

// landing/home(logeado): logo- mi perfil- registro(logout)- iconos redes sociales - corazon fav.- tienda

// tienda(sin logear): logo- registro- buscador(serchbar)

// tienda(logeado): logo, registro(logout)-carrito-favoritos- busqueda(serchbar)