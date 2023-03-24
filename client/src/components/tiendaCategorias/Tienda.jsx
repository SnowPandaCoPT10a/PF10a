import React from 'react';
import Banner from './banner/Banner';
import Categorias from './categorias/Categorias';
import Destacados from './destacados/Destacados';
import Marcas from './marcas/Marcas';
const tienda = () => {

  return (
    <div>
       <Banner/>
       <Categorias/>
       <Destacados/>
       <Marcas/>
    </div>
  )
}

export default tienda