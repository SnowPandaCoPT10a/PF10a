import React, {useState} from 'react'
import './Header.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithubSquare, FaUserAlt, FaShoppingCart } from 'react-icons/fa'
import SearchBar from '../SearchBar/SearchBar'
import { Link , useLocation, useNavigate } from 'react-router-dom'


const Header = ({navigateToCategory, categories}) => {
	const location = useLocation();
  let navigate = useNavigate();
  function handleClick() {
    navigate(-1)
  }

 const isProductCategoryPage = categories.some(
    (category) => location.pathname === category.path
  );

  const [active, setActive] = useState('Home')

  const headerActive = (value) => {
    setActive(value)
  }

  return (
    <div className='cntHeader'>
      <Link to={'/'}>
        <button className={active==='Home'?'btnHome active': 'btnHome'} onClick={()=>headerActive('Home')}>Home</button>
      </Link>

      <Link to={'/Shop'}>
        <button className={active==='Shop'?'btnHome active': 'btnHome'} onClick={()=>headerActive('Shop')}>Shop</button>
      </Link>

      <Link to={'/Create'}>
        <button className={active==='Create'?'btnHome active': 'btnHome'} onClick={()=>headerActive('Create')}>Create</button>
      </Link>

      {isProductCategoryPage && <SearchBar categories={categories} />}

      <button className='btnUser'>
        <FaUserAlt />
      </button>
      <button className='btnCarrt'>
        <FaShoppingCart />
      </button>
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