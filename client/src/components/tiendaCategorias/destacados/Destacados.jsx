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
    <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={1000}>
      {newData ? newData.map(e =>
        <div className="card">
          <img src={e.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{e.name}</h5>
            <p className="card-text">{e.category}</p>
            <a className="btn btn-primary">{e.brand}</a>
          </div>
        </div>

      )
    :
    <div></div>}
    </Carousel>
  )
}

export default Destacados