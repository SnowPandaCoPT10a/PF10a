import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import './style.css'

const Marcas = () => {
  const datos = useSelector(e=>e.allProducts)
  let dataBrand = datos.map(e=>e.brand)
  let marcas = [... new Set(dataBrand)]

  return (
    <div className='container'>
      <h1 className='text-secondary text-center my-5'>NUESTRAS MARCAS</h1>
      <div className='d-block row row-cols-4 d-flex justify-content-center lign-items-center'>
        {marcas.map(e=>
          <Link to={`/${e}`} key={`/${e}`} className='py-4 text-secondary text-decoration-none'>
            <b className='py-5 border rounded h2 shadow-s items'>{e}</b>  
          </Link>
        )}
      </div>
    </div>
  )
}

export default Marcas