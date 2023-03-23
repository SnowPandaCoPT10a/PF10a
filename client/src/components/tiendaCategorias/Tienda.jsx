import React from 'react'
import {cat} from '../../data/categorias.js'

const tienda = () => {


    const category = (data) => {
        console.log(data)
    }

  return (
    <div>
       {cat.map(e=>
        <div key={e.name}>
            <h2 onClick={()=> category(e.name)}>{e.name}</h2>
            <br />
        </div>
        )}
    </div>
  )
}

export default tienda