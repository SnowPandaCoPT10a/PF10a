import React from 'react'
import {data} from '../../../data/categorias';
import './style.css'
import {Link} from 'react-router-dom'

const Categorias = ({scroll}) => {
  return (
    <div className="marketing">
      <h2 className='text-center mt-5 text-secondary'>CATEGORIAS</h2>
      <div className=" row text-center d-flex justify-content-center lign-items-center contianer">
      {data.map(e =>
          <Link onClick={()=>scroll()} to={`/Products/${e.name}`} key={e.name} className="my-3 text-decoration-none col-2 text-secondary text">
            <img className="w-100 rounded-circle" src={e.img} alt="" />
            <h2 className="mt-4 fw-normal">{e.name}</h2>
          </Link>
      )}
      </div>

    </div>
  )
}

export default Categorias