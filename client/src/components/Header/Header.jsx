import React, { useState ,useEffect} from 'react'
import './Header.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithubSquare, FaUserAlt, FaShoppingCart } from 'react-icons/fa'
import SearchBar from '../SearchBar/SearchBar'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Logo from '../../img/logoPanda.png';
import Login from '../Login/Login.jsx'
import Logout from '../Logout/Logout.jsx'
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../Redux/actions/index'


const Header = ({ navigateToCategory, categories, countProducts }) => {
  const location = useLocation();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const datos = useSelector(e => e.user)
  
  try {
    const perfil = datos.find(obj => obj.email === user.email);
    
  } catch (error) {
    console.log(error);
  }

  //console.log(perfil, "PATO")
  const { isAuthenticated, isLoading,user } = useAuth0();

  useEffect(() => {
	 	
    dispatch(getAllUsers())
     }, [dispatch])
   
  if (isLoading) {
    return (
      <div >
        <div></div>
      </div>
    );
  }

 
console.log(user,"PATATA")


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
  
		

  return (
    <div className='cntHeader'>
      <Link to={'/'} onClick={() => scrollTop()}>
        <img src={Logo} alt="" className='imgLogo' />
      </Link>
      
      {/* {isProductCategoryPage && <SearchBar categories={categories} />} */}
      <div>
      {location.pathname !== '/' &&  <SearchBar categories={categories} />}
      </div>
     
     

      <Link to={'/Shop'} onClick={() => scrollTop()}>
        <button className={(rutaUrl.includes('Shop')) ? 'btnHome active' : 'btnHome'}>Shop</button>
      </Link>

      <Link to={'/Create'} onClick={() => scrollTop()}>
        <button className={(rutaUrl.includes('Create')) ? 'btnHome active' : 'btnHome'}>Create</button>
      </Link>


      {!isAuthenticated ? null : <div class="dropdown ms-3">
      <button class="btn btn-bd-light dropdown-toggle" id="bd-versions" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static">
      <span class="d-none d-lg-inline">Admin Console</span> 
      </button>
      <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="bd-versions">
      
      
      <li><a class="dropdown-item" href="/ManageProfiles">Manage Profiles</a></li>
      
      <li><a class="dropdown-item" href="/ManageProducts">Manage Products</a></li>
      
      <li><a class="dropdown-item" href="/ManageBills">Manage Bills</a></li>
      
      <li><a class="dropdown-item" href="/ManageReviews">Manage Reviews</a></li>
      </ul>
      </div>}


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