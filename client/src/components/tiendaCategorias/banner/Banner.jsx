import React from 'react'

import './style.css'

const Banner = () => {
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide banerContain" data-bs-ride="carousel">
            <div className="carousel-indicators ">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
            </div>

            <div className="carousel-inner container">
                <div className="carousel-item active" data-bs-interval={2000}>
                    <img src={imageOne} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval={2000}>
                    <img src={imageTwo} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval={2000}>
                    <img src={imageThree} className="d-block w-100" alt="..." />
                </div>
            </div>
        </div>
    )
}

export default Banner