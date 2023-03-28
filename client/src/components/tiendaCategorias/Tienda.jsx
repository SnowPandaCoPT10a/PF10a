import React from 'react';
import { useSelector } from 'react-redux';
import Banner from './banner/Banner';
import Categorias from './categorias/Categorias';
import Destacados from './destacados/Destacados';
import Marcas from './marcas/Marcas';
import './style.css'

const tienda = () => {
  const datos = useSelector(e=>e.allProducts)
  const scroll = () => {
    window.scroll({
      top: 0
    })
  }
  return (
    <div className='tiendaCont p-0 m-0 text-center'>
       <Banner/>
       <Categorias scroll={scroll}/>
       <Destacados datos={datos}/>
       <Marcas scroll={scroll} datos={datos}/>
    </div>
  )
}

export default tienda