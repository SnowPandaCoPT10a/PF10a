import React from 'react'
import {data} from '../../../data/categorias';
import './style.css'
import {Link} from 'react-router-dom'

const Categorias = () => {
  return (
    <div className="marketing">
      <h2 className='text-center mt-5'>CATEGORIAS</h2>
      <div className=" row text-center d-flex justify-content-center lign-items-center contianer">
      {data.map(e =>
          <Link to={`/${e.name}`} className="col-2">
            <img className="w-100 rounded-circle" src={e.img} alt="" />
            <h2 className="fw-normal">{e.name}</h2>
          </Link>
      )}
      </div>

    </div>
  )
}

export default Categorias