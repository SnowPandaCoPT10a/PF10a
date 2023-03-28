import React, {useState} from 'react'
import './Header.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithubSquare, FaUserAlt, FaShoppingCart } from 'react-icons/fa'
import SearchBar from '../SearchBar/SearchBar'
import { Link , useLocation, useNavigate } from 'react-router-dom'
import Logo from '../../img/logoPanda.png';


const Header = ({navigateToCategory, categories}) => {
	const location = useLocation();
  let navigate = useNavigate();

  function handleClick() {
    navigate(-1)
  }

  const rutaUrl = window.location.href
  console.log(rutaUrl.includes('Shop'));

 const isProductCategoryPage = categories.some(
    (category) => location.pathname === category.path
  );

  return (
    <div className='cntHeader'>
      <Link to={'/'}>
        <img src={Logo} alt="" className='imgLogo'/>
      </Link>

      <Link to={'/Shop'}>
        <button className={(rutaUrl.includes('Shop'))?'btnHome active': 'btnHome'}>Shop</button>
      </Link>

      <Link to={'/Create'}>
        <button className={(rutaUrl.includes('Create'))?'btnHome active': 'btnHome'}>Create</button>
      </Link>

      {isProductCategoryPage && <SearchBar categories={categories} />}

      <button className='btnUser'>
        <FaUserAlt />
      </button>
      <Link to={'/ShoppingCart'}>
      <button className='btnCarrt'>
        <FaShoppingCart />
      </button>
      </Link>
      <button className= 'btnHome' onClick={handleClick}>Back</button>
    </div>
  );
}


export default Header

// (se cambian con condicionales)

// landing/home(sin logear): logo -registro( login)-tienda - iconos redes sociales - corazoncito de favoritos

// landing/home(logeado): logo- mi perfil- registro(logout)- iconos redes sociales - corazon fav.- tienda

// tienda(sin logear): logo- registro- buscador(serchbar)

// tienda(logeado): logo, registro(logout)-carrito-favoritos- busqueda(serchbar)