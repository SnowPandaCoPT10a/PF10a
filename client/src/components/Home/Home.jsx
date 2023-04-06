import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../Redux/actions/index'
import { useAuth0 } from "@auth0/auth0-react";
import { createNewUser } from '../../Redux/actions/index.js';
import './Home.css';
import Start from './Start/Start';
import AboutUs from './AboutUs/AboutUs';
import Destacados from '../tiendaCategorias/destacados/Destacados';
import Values from './Values/Values'
import Form from './Form/Form';

const Home = () => {

  const datos = useSelector(e => e.allProducts)
  const dispatch = useDispatch()
  const { user, isAuthenticated } = useAuth0();
  const [userCreated, setUserCreated] = useState(false);

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])

  useEffect(() => {
    if (isAuthenticated && user && !userCreated) {
      dispatch(createNewUser(
        user.family_name,
        user.given_name,
        user.email,
        user.picture
      ));
      setUserCreated(true);
    }
  }, [isAuthenticated, user, dispatch, userCreated]);

  return (
    <div className='container' >
      <Start/>
      <section id="about-us">
      <AboutUs/>
      </section>
      <Destacados datos={datos} />
      <section id="our-values">
      <Values/>
      </section>
      <Form />
    </div>
  )
}

export default Home