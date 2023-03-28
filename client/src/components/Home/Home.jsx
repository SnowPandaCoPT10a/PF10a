import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Home.css';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import { getAllProducts } from '../../Redux/actions/index'
import Destacados from '../tiendaCategorias/destacados/Destacados';
import Logo from '../../img/sin-fondo-2085x1251px.png';


const Home = () => {

  const datos = useSelector(e=>e.allProducts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])


  return (
    <div className='container' >
      <section className='inicio'>
        <div className='video-container'>
          <video src='https://res.cloudinary.com/dberwyxyq/video/upload/v1679686306/SnowPandaCO/FrontEnd/Copia-de-snowboard_zyoy3c.mp4' alt='video' autoPlay muted loop></video>
          <div className='conteiner-text'>
            <img className='logo' src={Logo} />
            <h2>Encuentra el equilibrio, mantén la velocidad, disfruta del viaje.</h2>
            <Link to='/shop'>
              <button className='button-inicio'>Tienda</button>
            </Link>
          </div>
        </div>
      </section>
      <section >
        <div className='about-us'>
          <h2 className='titulo'>About Us</h2>
          <p className='about-us'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sapien felis, dapibus ac velit ultricies, cursus volutpat tortor. Phasellus et turpis consequat neque posuere finibus vitae vitae quam. Morbi accumsan aliquet efficitur. Morbi at posuere lacus, non tristique felis. In commodo mattis ligula eget auctor. Quisque vulputate magna eu turpis accumsan semper. Etiam quis elementum erat, pharetra malesuada nisi. Praesent accumsan venenatis leo. Sed cursus viverra mi in facilisis.

            Maecenas suscipit enim sem, quis molestie ligula scelerisque vitae. Ut interdum sit amet dolor non rhoncus. In sed ultricies odio, et semper dui. Nulla facilisi. Etiam sed mauris ut ante volutpat placerat vel quis ex. Mauris in cursus felis. Proin eu sodales mauris. Cras sagittis nisi odio, nec molestie ipsum ullamcorper sit amet. Sed elementum augue nec ex imperdiet, vulputate fermentum magna imperdiet.

            Nullam enim felis, faucibus eu felis vitae, bibendum sodales metus. Fusce accumsan risus nec nisi ultricies hendrerit. Suspendisse tellus mauris, interdum quis eleifend nec, varius at dolor. Nunc bibendum consectetur eros, cursus varius turpis gravida at.</p>
          <Link to='/Members'>
            <button className='button1'>Proyecto</button>
          </Link>
        </div>
      </section>
      <Destacados datos={datos}/>
      <section className='activities'>
        <h3 className='titulo'>Activities</h3>
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
      <Form />
    </div>
  )
}



export default Home


// video, ( snowboard.mp4) con frase motivacional, bien manija,

// boton a tienda

// (en cascada)

// info sobre la empresa snow panda
// destacados
// apartado de actividades
// contacto ( formulario de contacto)
// footers