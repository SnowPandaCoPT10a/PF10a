import React from 'react'
import { data } from '../../../data/categorias';
import './style.css'

const Categorias = () => {
  return (
    <div className="container marketing ">
      <h2 className='text-center mt-5'>CATEGORIAS</h2>
      {}
      <div className="row">
        <div className="col-lg-4">
          <img className="w-50 rounded-circle" src="https://res.cloudinary.com/dberwyxyq/image/upload/v1679320081/SnowPandaCO/Boards/Nitro%20Team.png" alt="" />
          <h2 className="fw-normal">boards</h2>
        </div>
      </div>
    </div>
  )
}

export default Categorias