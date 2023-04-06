import React, { useState } from 'react'
import './Header.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithubSquare, FaUserAlt, FaShoppingCart } from 'react-icons/fa'
import SearchBar from '../SearchBar/SearchBar'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Logo from '../../img/logoPanda.png';
import Login from '../Login/Login.jsx'
import Logout from '../Logout/Logout.jsx'
import { useAuth0 } from "@auth0/auth0-react";

const Header = ({ navigateToCategory, categories, countProducts }) => {
  const location = useLocation();
  let navigate = useNavigate();
  const [menuDesplegado, setmenuDesplegado] = useState(false);
  const [shopDesplegado, setshopDesplegado] = useState(false);
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div >
        <div></div>
      </div>
    );
  }

  function handleClick() {
    navigate(-1)
  }

  const rutaUrl = window.location.href
  console.log(rutaUrl.includes('Shop'));

  const isProductCategoryPage = categories.some(
    (category) => location.pathname === category.path
  );

  const scrollTop = () => {
    window.scroll(0, 0)
  }
  const scrollAbout = () => {
    window.scroll(0, 1200)
  }
  const scrollValues = () => {
    window.scroll(0, 2180)
  }
  const scrollCategories = () => {
    window.scroll(0, 750)
  }
  const scrollBrands = () => {
    window.scroll(0, 2100)
  }

  return (
    <div className='cntHeader'>
      <div
        className='logoContainer'
        onMouseEnter={() => setmenuDesplegado(true)}
        onMouseLeave={() => setmenuDesplegado(false)}
      >
        <Link to={'/'} onClick={() => scrollTop()}>
          <img src={Logo} alt="" className='imgLogo' />
        </Link>
        {window.location.pathname === '/' &&menuDesplegado && (
          <div className='navButtonsContainer'>
            <button className='btnCarrt' onClick={scrollAbout}>
              About Us
            </button>
            <button className='btnCarrt' onClick={scrollValues}>
              Our Values
            </button>
            <Link to='/Members' onClick={() => scrollTop()}>
              <button className='btnCarrt'>
                Members
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* {isProductCategoryPage && <SearchBar categories={categories} />} */}
      <div>
        {location.pathname !== '/' && <SearchBar categories={categories} />}
      </div>

      <div
        className='logoContainer'
        onMouseEnter={() => setshopDesplegado(true)}
        onMouseLeave={() => setshopDesplegado(false)}
      >
        <Link to={'/Shop'} onClick={() => scrollTop()}>
          <button className={(rutaUrl.includes('Shop')) ? 'btnHome active' : 'btnHome'}>Shop</button>
        </Link>
        {window.location.pathname === '/Shop' && shopDesplegado && (
          <div className='navButtonsContainer'>
            <button className='btnCarrt' onClick={scrollCategories}>
             Categories
            </button>
            <button className='btnCarrt' onClick={scrollBrands}>
              Our Brands
            </button>
          </div>
        )}
      </div>
      <Link to={'/Create'} onClick={() => scrollTop()}>
        <button className={(rutaUrl.includes('Create')) ? 'btnHome active' : 'btnHome'}>Create</button>
      </Link>

      {!isAuthenticated ? <Login /> :
        <Link to='/User'>  <button className='btnUser'>
          <FaUserAlt />
        </button>
        </Link>

      }

      {isAuthenticated ? <Logout /> : null}

      {!isAuthenticated ? null :

        <Link to={'/ShoppingCart'}>
          <button className='btnCarrt'>
            <FaShoppingCart />{countProducts}
          </button>
        </Link>
      }
    </div>
  );
}


export default Header

// (se cambian con condicionales)

// landing/home(sin logear): logo -registro( login)-tienda - iconos redes sociales - corazoncito de favoritos

// landing/home(logeado): logo- mi perfil- registro(logout)- iconos redes sociales - corazon fav.- tienda

// tienda(sin logear): logo- registro- buscador(serchbar)

// tienda(logeado): logo, registro(logout)-carrito-favoritos- busqueda(serchbar)


{/* <div class="btn-group" role="group">
    <button>
      Dropdown
    </button>
    <ul >
      <li><a  href="#">Dropdown link</a></li>
      <li><a  href="#">Dropdown link</a></li>
    </ul>
  </div> */}