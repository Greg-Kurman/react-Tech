import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselCaption from 'react-bootstrap/CarouselCaption';
import lolko from '../images/lolko.jpg'

export default class CarouselBox extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img className='d-block w-100'
                         src={ lolko }
                        
                        />
                        <CarouselCaption>
                            <h3>Hello</h3>
                            <p>click me</p>
                        </CarouselCaption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='d-block w-100'
                           src={ lolko }
                        />
                         <CarouselCaption>
                            <h3>Hello</h3>
                            <p>click me</p>
                        </CarouselCaption>
                    </Carousel.Item>
                   

                </Carousel>

                
            </div>
        )
    }
}
