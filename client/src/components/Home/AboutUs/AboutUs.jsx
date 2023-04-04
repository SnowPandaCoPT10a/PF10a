import React from 'react';
import './AboutUs.css' ;
import { Link } from 'react-router-dom';

const AboutUs = ()=>{
    return(
        <section >
            <div className='about-us'>
                <h1 className='text-center mt-5 text-secondary'>ABOUT US</h1>
                <h2 className='aboutUsTitle'>¡Bienvenido a <span>Snow Panda</span>!</h2>
                <p className='about-us'>Somos una empresa dedicada a proporcionar los mejores productos para los amantes del snowboard. Desde tablas de snowboard hasta botas, fijaciones y ropa, nuestro objetivo es ofrecer a nuestros clientes una amplia gama de productos de alta calidad para que puedan disfrutar de su deporte favorito con comodidad y estilo.</p>
                <h3 className='aboutProyecto'>Conoce más sobre este proyecto</h3>
                <Link to='/Members'>
                    <button className='button'>Proyecto</button>
                </Link>
            </div>
        </section>
    )
    };

export default AboutUs