import React from 'react'
import './Footers.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';



const Footers = () => {
  const location = useLocation();
  const isFixed = location.pathname === '/OrderConfirmation' || location.pathname === '/Checkout' || location.pathname === '/ShoppingCart' || location.pathname === '/Create';

  return (
    // <div className='contain-footer'>
    //   <footer className="footer-distributed">

    //     <div className="footer-right">
    //       <div className="footer-company-about">
    //         <p>
    //           <span>About the company</span>
    //           Societates sumus in solutionibus porttitor, qualitatem et excellentiam in servitii emptoris notavimus.
    //         </p>
    //       </div>
    //       <div className="footer-icons">

    //         <a className='linksF' ><FaFacebook aria-hidden="true" /></a>
    //         <a className='linksF' ><FaInstagram aria-hidden="true" /></a>
    //         <a className='linksF' ><FaLinkedin aria-hidden="true" /></a>
    //         <a className='linksF' ><FaGithubSquare aria-hidden="true" /></a>

    //       </div>
    //     </div>
    //     <div className="footer-right">
    //     </div>
    //     <div className='ctnResv'>
    //       <p >© ALL RIGHTS RESERVED SNOW PANDA COMPANY © 2023 | SNOWPANDA.COM </p>
    //       <Link to='/Members'>Members</Link>

    //     </div>
    //   </footer>
    // </div>
    <footer className="site-footer">
      <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <h6>Customer Service</h6>
          <ul className="footer-links">
            <li><a href="">Preguntas frecuente</a></li>
            <li><a href="">Pagos y retiros</a></li>
            <li><a href="">Terminos y condiciones</a></li>
            <li><a href="">Politicas de provacidad</a></li>
            <li><a href="">Log In</a></li>
          </ul>
        </div>

        <div className="col-xs-6 col-md-3">
          <h6>Snow Panda</h6>
          <ul className="footer-links">
            <li><a href="">Shop</a></li>
            <li><a href="">Categories</a></li>
            <li><a href="">Brands</a></li>
            <li><a href="">All product</a></li>
            <li><a href="">Log In</a></li>
          </ul>
        </div>

        <div className="col-xs-6 col-md-3">
          <h6>Contact</h6>
          <ul className="footer-links">
            <li><a href="">Contact Us</a></li>
            <li><a href="">About Us</a></li>
            <li><Link to='/Members'>Members</Link></li>
          </ul>
        </div>
      </div>
      <hr/>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-6 col-xs-12">
        <p >© ALL RIGHTS RESERVED SNOW PANDA COMPANY © 2023 | SNOWPANDA.COM </p>
        </div>

        <div className="col-md-4 col-sm-6 col-xs-12">
          <ul className="social-icons">
            <li><a className="facebook" ><FaFacebook aria-hidden="true"/></a></li>
            <li><a className="twitter" ><FaInstagram aria-hidden="true"/></a></li>
            <li><a className="dribbble" ><FaLinkedin aria-hidden="true"/></a></li>
            <li><a className="linkedin" ><FaGithubSquare aria-hidden="true" /></a></li>  

 
          </ul>
        </div>
      </div>
    </div>
</footer>
  )
}


export default Footers

// iconos sociales- icono de henry- sobre nosotros*

// contactos- preguntas frecuentes/servicios al cliente

// politicas de privacidad

// terminos y condiciones

// como comprar/ preguntas frecuentes

// (let's GO sacar info de aca)