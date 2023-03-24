import React from 'react';
import Banner from './banner/Banner';
import Categorias from './categorias/Categorias';
import Destacados from './destacados/Destacados';
import Marcas from './marcas/Marcas';
import './style.css'

const tienda = () => {

  return (
    <div className='tiendaCont p-0 m-0'>
       <Banner/>
       <Categorias/>
       <Destacados/>
       <Marcas/>
    </div>
  )
}

export default tienda