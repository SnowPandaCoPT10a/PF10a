import React from "react";
import './Values.css';

const Values =()=>{
    return (
        <section className='activities'>
        <h3 className='text-center mt-5 text-secondary'>OUR VALUES</h3>
        <div className='fila'>
          <div className='proyecto'>
            <div className='overlay'></div>
            <img src='https://res.cloudinary.com/dberwyxyq/image/upload/v1679686355/SnowPandaCO/FrontEnd/actividad1_wplhac.jpg' alt="actividad1" />
            <div className='info'>
              <h4>Descripción</h4>
              <p>Galeria 1</p>
            </div>
          </div>
          <div className='proyecto'>
            <div className='overlay'></div>
            <img src='https://res.cloudinary.com/dberwyxyq/image/upload/v1679686358/SnowPandaCO/FrontEnd/actividad2_u7io4a.jpg' alt="actividad2" />
            <div className='info'>
              <h4>Descripción</h4>
              <p>Galeria 2</p>
            </div>
          </div>
          <div className='proyecto'>
            <div className='overlay'></div>
            <img src='https://res.cloudinary.com/dberwyxyq/image/upload/v1679686358/SnowPandaCO/FrontEnd/actividad3_pyidhw.jpg' alt="actividad3" />
            <div className='info'>
              <h4>Descripción</h4>
              <p>Galeria 3</p>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Values