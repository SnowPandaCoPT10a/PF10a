import React from 'react';
import './AboutUs.css' ;
import { Link } from 'react-router-dom';

const AboutUs = ()=>{
    return(
        <section >
            <div className='about-us'>
                <h2 className='text-center mt-5 text-secondary'>ABOUT US</h2>
                <p className='about-us'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sapien felis, dapibus ac velit ultricies, cursus volutpat tortor. Phasellus et turpis consequat neque posuere finibus vitae vitae quam. Morbi accumsan aliquet efficitur. Morbi at posuere lacus, non tristique felis. In commodo mattis ligula eget auctor. Quisque vulputate magna eu turpis accumsan semper. Etiam quis elementum erat, pharetra malesuada nisi. Praesent accumsan venenatis leo. Sed cursus viverra mi in facilisis.
                Maecenas suscipit enim sem, quis molestie ligula scelerisque vitae. Ut interdum sit amet dolor non rhoncus. In sed ultricies odio, et semper dui. Nulla facilisi. Etiam sed mauris ut ante volutpat placerat vel quis ex. Mauris in cursus felis. Proin eu sodales mauris. Cras sagittis nisi odio, nec molestie ipsum ullamcorper sit amet. Sed elementum augue nec ex imperdiet, vulputate fermentum magna imperdiet.
                Nullam enim felis, faucibus eu felis vitae, bibendum sodales metus. Fusce accumsan risus nec nisi ultricies hendrerit. Suspendisse tellus mauris, interdum quis eleifend nec, varius at dolor. Nunc bibendum consectetur eros, cursus varius turpis gravida at.</p>
                <Link to='/Members'>
                    <button className='button1'>Proyecto</button>
                </Link>
            </div>
        </section>
    )
    };

export default AboutUs