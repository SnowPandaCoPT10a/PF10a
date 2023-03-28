import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Destacados = ({ datos }) => {

  let newData = datos && datos.filter(e => e.featuredProduct === true)

  return (
    <div className='bg-secondary px-5 py-4 rounded my-4'>
      <h2 className='text-white text-center'>PRODUCTOS DESTACADOS</h2>
      <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000} className='mt-5'>
        {newData ? newData.map(e =>
          <div className="card mx-3">
            <img src={e.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{e.name}</h5>
              <p className="card-text">{e.category}</p>
              <p className="">{e.brand}</p>
            </div>
          </div>

        )
      :
      <div></div>}
      </Carousel>
    </div>
  )
}

export default Destacados