import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../../../App.css';

function CarouselComponent() {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 h-20"
                        src="/assets/images/carousel/Carousel1.jpg"
                        alt=""
                    />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="/assets/images/carousel/Carousel2.jpg"
                        alt=""
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/assets/images/carousel/Carousel3.jpg"
                        alt=""
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselComponent
