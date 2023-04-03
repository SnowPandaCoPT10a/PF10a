import React from 'react'
import './Footers.css'
import {FaFacebook, FaInstagram, FaLinkedin, FaGithubSquare} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';



const Footers = () => {
  const location = useLocation();
  const isFixed = location.pathname === '/OrderConfirmation' || location.pathname === '/Checkout' || location.pathname === '/ShoppingCart' || location.pathname === '/Create' ;
 
  return (
    <div >      
		<footer className="footer-distributed">

      <div className="footer-right">
        <div className="footer-company-about">
        <p>
          <span>About the company</span>
          Societates sumus in solutionibus porttitor, qualitatem et excellentiam in servitii emptoris notavimus.
        </p>
        </div>
        <div className="footer-icons">

          <a className='linksF' ><FaFacebook aria-hidden="true" /></a>
          <a className='linksF' ><FaInstagram aria-hidden="true" /></a>
          <a className='linksF' ><FaLinkedin aria-hidden="true" /></a>
          <a className='linksF' ><FaGithubSquare aria-hidden="true" /></a>

        </div>
      </div>
      <div className="footer-right">
      </div>
      <div className='ctnResv'>
    <p >© ALL RIGHTS RESERVED SNOW PANDA COMPANY © 2023 | SNOWPANDA.COM </p>       
    <Link to='/Members'>Members</Link>
    
    </div>    
    </footer>  
		</div>
	)
}


export default Footers

// iconos sociales- icono de henry- sobre nosotros*

// contactos- preguntas frecuentes/servicios al cliente

// politicas de privacidad

// terminos y condiciones

// como comprar/ preguntas frecuentes

// (let's GO sacar info de aca)